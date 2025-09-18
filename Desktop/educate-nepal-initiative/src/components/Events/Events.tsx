import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image, X, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import type { Event as EventType } from '../../types/program';

interface EventsProps {
  events: EventType[];
}

const Events: React.FC<EventsProps> = ({ events }) => {
  const [selectedImage, setSelectedImage] = useState<{eventId: string, index: number} | null>(null);

  if (!events || events.length === 0) {
    return null;
  }

  const openImage = (eventId: string, index: number) => {
    setSelectedImage({ eventId, index });
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const event = events.find(e => e.id === selectedImage.eventId);
    if (!event) return;
    
    let newIndex = selectedImage.index;
    if (direction === 'prev') {
      newIndex = (selectedImage.index - 1 + event.images.length) % event.images.length;
    } else {
      newIndex = (selectedImage.index + 1) % event.images.length;
    }
    
    setSelectedImage({ ...selectedImage, index: newIndex });
  };

  return (
    <div className="space-y-12">
      {events.map((event) => (
        <div key={event.id} className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">{event.title}</h3>
            {event.date && (
              <span className="text-gray-500 flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {event.date}
              </span>
            )}
          </div>
          
          {event.description && <p className="text-gray-700">{event.description}</p>}
          
          {event.images && event.images.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {event.images.map((image, index) => (
                <motion.div
                  key={index}
                  className="relative aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openImage(event.id, index)}
                >
                  <img
                    src={image}
                    alt={`${event.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Image className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Image Viewer */}
      <AnimatePresence>
        {selectedImage && (() => {
          const event = events.find(e => e.id === selectedImage.eventId);
          if (!event || !event.images[selectedImage.index]) return null;
          
          return (
            <motion.div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeImage}
            >
              <div className="relative max-w-5xl max-h-[90vh]" onClick={e => e.stopPropagation()}>
                <img
                  src={event.images[selectedImage.index]}
                  alt={`${event.title} ${selectedImage.index + 1}`}
                  className="max-w-full max-h-[80vh] object-contain"
                />
                
                <button 
                  className="absolute -left-16 text-white hover:text-primary-400 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('prev');
                  }}
                >
                  <ChevronLeft className="w-12 h-12" />
                </button>
                
                <button 
                  className="absolute -right-16 text-white hover:text-primary-400 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('next');
                  }}
                >
                  <ChevronRight className="w-12 h-12" />
                </button>
                
                <button 
                  className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                  onClick={closeImage}
                >
                  <X className="w-8 h-8" />
                </button>
                
                <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm">
                  {selectedImage.index + 1} of {event.images.length}
                </div>
              </div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </div>
  );
};

export default Events;

// API configuration
// Read from Vite environment variables so we can point to a real backend in production
// Example in .env.local (or .env):
// VITE_API_BASE_URL=https://your-api.example.com
// VITE_CONTACT_PATH=/contact
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';
const CONTACT_PATH = import.meta.env.VITE_CONTACT_PATH || '/api/contact';

// Generic API call function
async function apiCall(endpoint: string, data: any) {
  // If we have an API base URL, use the custom backend
  if (API_BASE_URL) {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API call failed:', error);
      throw error;
    }
  }

  // Fallback: use FormSubmit.co for static hosting (GitHub Pages)
  try {
    const response = await fetch('https://formsubmit.co/ajax/nischalsb2003@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        ...data,
        _subject: `New Submission: ${endpoint.replace('/', '')}`,
        _cc: 'educatenepalinitiative123@gmail.com',
        _template: 'table',
      }),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('API call failed (FormSubmit fallback):', error);
    throw error;
  }
}

// Contact form API
export const submitContactForm = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  // If we have an API base URL, use the custom backend
  if (API_BASE_URL) {
    try {
      const response = await fetch(`${API_BASE_URL}${CONTACT_PATH}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to send message');
      }

      return await response.json();
    } catch (error) {
      console.error('Error in submitContactForm (custom backend):', error);
      throw error;
    }
  }

  // Fallback: use FormSubmit.co for static hosting (GitHub Pages)
  // No API keys needed — emails go directly to your Gmail
  try {
    const response = await fetch('https://formsubmit.co/ajax/nischalsb2003@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        _subject: `New Contact Form: ${formData.subject}`,
        message: formData.message,
        _cc: 'educatenepalinitiative123@gmail.com',
        _template: 'table',
      }),
    });

    const result = await response.json();
    if (!result.success) {
      throw new Error(result.message || 'Failed to send message');
    }

    return result;
  } catch (error) {
    console.error('Error in submitContactForm:', error);
    throw error;
  }
};

// Volunteer application API
export const submitVolunteerApplication = async (formData: {
  name: string;
  email: string;
  phone: string;
  skills: string[];
  availability: string;
  experience: string;
  motivation: string;
}) => {
  return apiCall('/volunteer', formData);
};

// Donation form API
export const submitDonationForm = async (formData: {
  amount: number;
  paymentMethod: string;
  donorName?: string;
  donorEmail?: string;
  donorPhone?: string;
  isAnonymous?: boolean;
}) => {
  return apiCall('/donation', formData);
};

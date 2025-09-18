// API configuration
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-api-gateway-url.amazonaws.com/prod' // Replace with your actual API Gateway URL
  : 'http://localhost:3000'; // For local development

// Generic API call function
async function apiCall(endpoint: string, data: any) {
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

// Contact form API
export const submitContactForm = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  return apiCall('/contact', formData);
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

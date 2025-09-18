import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
  phone: z.string().optional(),
  interest: z.enum(['volunteer', 'donation', 'partnership', 'other']).optional(),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

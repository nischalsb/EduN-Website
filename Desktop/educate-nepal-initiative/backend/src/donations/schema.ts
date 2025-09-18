import { z } from 'zod';

export const donationInputSchema = z.object({
  amount: z.number().positive({ message: 'Amount must be a positive number' }),
  currency: z.string().length(3, { message: 'Currency must be 3 characters' }),
  donorEmail: z.string().email({ message: 'Invalid email address' }),
  donorName: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  paymentMethod: z.enum(['khalti', 'stripe', 'bank_transfer'], {
    required_error: 'Payment method is required',
  }),
  purpose: z.enum(['general', 'scholarship', 'infrastructure', 'other']).optional(),
  message: z.string().max(500).optional(),
  anonymous: z.boolean().default(false),
});

export const khaltiVerificationSchema = z.object({
  token: z.string(),
  amount: z.number(),
  donationId: z.string().uuid(),
});

export type DonationInput = z.infer<typeof donationInputSchema>;
export type KhaltiVerification = z.infer<typeof khaltiVerificationSchema>;

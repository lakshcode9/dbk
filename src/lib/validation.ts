import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email format'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters long'),
  tourDetails: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
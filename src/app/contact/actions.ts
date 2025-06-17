'use server';

import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  // Removed subject and message from schema
});

export type ContactFormValues = z.infer<typeof formSchema>;

export async function submitContactForm(values: ContactFormValues): Promise<{ success: boolean; error?: string }> {
  const validation = formSchema.safeParse(values);

  if (!validation.success) {
    return { success: false, error: 'Invalid form data. Please check your inputs.' };
  }

  // In a real application, you would send an email or save to a database here.
  // For this example, we'll just simulate a successful submission.
  console.log('Contact form submitted:', validation.data);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Simulate a potential error (uncomment to test error handling)
  // if (validation.data.email.includes('error@example.com')) {
  //   return { success: false, error: 'This email address is blocked.' };
  // }

  return { success: true };
}

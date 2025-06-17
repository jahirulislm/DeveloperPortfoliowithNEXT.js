'use server';

/**
 * @fileOverview AI-powered tool to generate personalized cover letters.
 *
 * - generateCoverLetter - A function that generates personalized cover letters.
 * - GenerateCoverLetterInput - The input type for the generateCoverLetter function.
 * - GenerateCoverLetterOutput - The return type for the generateCoverLetter function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCoverLetterInputSchema = z.object({
  jobDescription: z.string().describe('The job description for the position.'),
  company: z.string().describe('The name of the company.'),
  portfolioContent: z.string().describe('The content of the portfolio.'),
  userName: z.string().describe('The name of the user.'),
});
export type GenerateCoverLetterInput = z.infer<typeof GenerateCoverLetterInputSchema>;

const GenerateCoverLetterOutputSchema = z.object({
  coverLetter: z.string().describe('The generated cover letter.'),
});
export type GenerateCoverLetterOutput = z.infer<typeof GenerateCoverLetterOutputSchema>;

export async function generateCoverLetter(input: GenerateCoverLetterInput): Promise<GenerateCoverLetterOutput> {
  return generateCoverLetterFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateCoverLetterPrompt',
  input: {schema: GenerateCoverLetterInputSchema},
  output: {schema: GenerateCoverLetterOutputSchema},
  prompt: `You are an AI assistant that specializes in creating cover letters for job seekers.

  Based on the job description, company, portfolio content, and user name, generate a personalized cover letter.

  Job Description: {{{jobDescription}}}
  Company: {{{company}}}
  Portfolio Content: {{{portfolioContent}}}
  User Name: {{{userName}}}

  Cover Letter: `,
});

const generateCoverLetterFlow = ai.defineFlow(
  {
    name: 'generateCoverLetterFlow',
    inputSchema: GenerateCoverLetterInputSchema,
    outputSchema: GenerateCoverLetterOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

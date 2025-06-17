'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { generateCoverLetter, type GenerateCoverLetterInput } from '@/ai/flows/generate-cover-letter';
import { Loader2, Sparkles, ClipboardCopy, ClipboardCheck } from 'lucide-react';
import { aboutMe, portfolioSummaryForAI } from '@/data/about'; // Assuming name and portfolio content can be pre-filled.

const formSchema = z.object({
  jobDescription: z.string().min(50, { message: 'Job description must be at least 50 characters.' }).max(5000, { message: 'Job description too long.'}),
  company: z.string().min(2, { message: 'Company name must be at least 2 characters.' }).max(100, { message: 'Company name too long.'}),
  portfolioContent: z.string().min(50, { message: 'Portfolio summary must be at least 50 characters.' }).max(5000, { message: 'Portfolio summary too long.'}),
  userName: z.string().min(2, { message: 'Your name must be at least 2 characters.' }).max(50, { message: 'Your name too long.'}),
});

type CoverLetterFormValues = z.infer<typeof formSchema>;

export default function CoverLetterForm() {
  const { toast } = useToast();
  const [generatedLetter, setGeneratedLetter] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const form = useForm<CoverLetterFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jobDescription: '',
      company: '',
      portfolioContent: portfolioSummaryForAI || '', // Pre-fill from data/about.ts
      userName: aboutMe.name || '', // Pre-fill from data/about.ts
    },
  });

  async function onSubmit(values: CoverLetterFormValues) {
    setIsLoading(true);
    setGeneratedLetter(null);
    try {
      const input: GenerateCoverLetterInput = {
        jobDescription: values.jobDescription,
        company: values.company,
        portfolioContent: values.portfolioContent,
        userName: values.userName,
      };
      const result = await generateCoverLetter(input);
      setGeneratedLetter(result.coverLetter);
      toast({
        title: 'Cover Letter Generated!',
        description: 'Your personalized cover letter is ready.',
      });
    } catch (error: any) {
      console.error("Error generating cover letter:", error);
      toast({
        title: 'Generation Failed',
        description: error.message || 'Could not generate the cover letter. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  const handleCopy = () => {
    if (generatedLetter) {
      navigator.clipboard.writeText(generatedLetter)
        .then(() => {
          setIsCopied(true);
          toast({ title: 'Copied to clipboard!' });
          setTimeout(() => setIsCopied(false), 2000);
        })
        .catch(err => {
          toast({ title: 'Copy failed', description: 'Could not copy text.', variant: 'destructive' });
        });
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="userName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Name</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Alex Johnson" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Tech Solutions Inc." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="jobDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Paste the job description here..."
                    {...field}
                    rows={8}
                    className="min-h-[150px]"
                  />
                </FormControl>
                 <FormDescription>
                  Provide the full job description for the best results.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="portfolioContent"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Skills & Portfolio Summary</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Summarize your key skills, experience, and relevant projects..."
                    {...field}
                    rows={8}
                    className="min-h-[150px]"
                  />
                </FormControl>
                 <FormDescription>
                  Highlight what makes you a good fit. This will be used by the AI.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Generate Cover Letter
              </>
            )}
          </Button>
        </form>
      </Form>

      {generatedLetter && (
        <Card className="mt-10 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Your Generated Cover Letter</span>
              <Button variant="ghost" size="icon" onClick={handleCopy} aria-label="Copy cover letter">
                {isCopied ? <ClipboardCheck className="h-5 w-5 text-green-500" /> : <ClipboardCopy className="h-5 w-5" />}
              </Button>
            </CardTitle>
            <CardDescription>Review and edit the generated letter as needed.</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              value={generatedLetter}
              readOnly // Or allow editing directly: onChange={e => setGeneratedLetter(e.target.value)}
              rows={15}
              className="bg-muted/30 min-h-[300px] whitespace-pre-wrap"
            />
          </CardContent>
        </Card>
      )}
    </>
  );
}

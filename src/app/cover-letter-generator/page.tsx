import CoverLetterForm from './CoverLetterForm';
import { FileText, Wand2 } from 'lucide-react';

export const metadata = {
  title: 'AI Cover Letter Generator | DevSpace',
  description: 'Generate personalized cover letters using AI based on your profile and job descriptions.',
};

const CoverLetterGeneratorPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <div className="inline-flex items-center justify-center bg-primary/10 text-primary p-3 rounded-full mb-4">
            <Wand2 className="h-10 w-10" />
        </div>
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">AI Cover Letter Generator</h1>
        <p className="text-lg text-foreground/70 mt-4 max-w-2xl mx-auto text-balance">
          Craft compelling cover letters effortlessly. Provide the job details and your information, and let our AI assistant create a personalized draft for you.
        </p>
      </header>

      <div className="max-w-3xl mx-auto bg-card p-6 sm:p-8 rounded-lg shadow-xl">
        <div className="flex items-center text-xl font-semibold mb-6">
          <FileText className="h-6 w-6 mr-3 text-primary" />
          <span>Cover Letter Details</span>
        </div>
        <CoverLetterForm />
      </div>
    </div>
  );
};

export default CoverLetterGeneratorPage;

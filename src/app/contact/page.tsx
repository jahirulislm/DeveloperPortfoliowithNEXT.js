import { ContactForm } from './ContactForm';
import { Mail, MapPin, Phone, Linkedin, Github, Twitter } from 'lucide-react';
import { aboutMe } from '@/data/about';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Contact Me | DevSpace',
  description: 'Get in touch for collaborations, inquiries, or just to say hi!',
};

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Get In Touch</h1>
        <p className="text-lg text-foreground/70 mt-4 max-w-2xl mx-auto text-balance">
          Have a project in mind, a question, or just want to connect? Feel free to reach out. I&apos;m always open to discussing new opportunities and collaborations.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="bg-card p-8 rounded-lg shadow-xl">
          <h2 className="font-headline text-2xl font-semibold mb-6">Send a Message</h2>
          <ContactForm />
        </div>

        <div className="space-y-8">
            <div className="bg-card p-8 rounded-lg shadow-xl">
                <h3 className="font-headline text-xl font-semibold mb-4 text-primary">Contact Information</h3>
                <ul className="space-y-3 text-foreground/80">
                    {aboutMe.socialLinks.email && (
                    <li className="flex items-center">
                        <Mail className="h-5 w-5 mr-3 text-primary" />
                        <Link href={aboutMe.socialLinks.email} className="hover:underline hover:text-primary transition-colors">{aboutMe.socialLinks.email.replace('mailto:','')}</Link>
                    </li>
                    )}
                    {/* Add Phone and Address if available and appropriate */}
                    {/* <li className="flex items-center">
                        <Phone className="h-5 w-5 mr-3 text-primary" />
                        <span>+1 234 567 8900</span>
                    </li>
                    <li className="flex items-center">
                        <MapPin className="h-5 w-5 mr-3 text-primary" />
                        <span>123 Tech Street, Silicon Valley, CA</span>
                    </li> */}
                </ul>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-xl">
                <h3 className="font-headline text-xl font-semibold mb-4 text-primary">Connect on Social Media</h3>
                <div className="flex space-x-4">
                    {aboutMe.socialLinks.linkedin && (
                        <Button variant="outline" size="icon" asChild className="hover:border-primary hover:text-primary transition-colors">
                            <Link href={aboutMe.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </Button>
                    )}
                    {aboutMe.socialLinks.github && (
                         <Button variant="outline" size="icon" asChild className="hover:border-primary hover:text-primary transition-colors">
                            <Link href={aboutMe.socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <Github className="h-5 w-5" />
                            </Link>
                        </Button>
                    )}
                    {aboutMe.socialLinks.twitter && (
                         <Button variant="outline" size="icon" asChild className="hover:border-primary hover:text-primary transition-colors">
                            <Link href={aboutMe.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <Twitter className="h-5 w-5" />
                            </Link>
                        </Button>
                    )}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

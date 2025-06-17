
"use client"; // Add 'use client' for useState and useEffect

import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { aboutMe } from '@/data/about';
import { useState, useEffect } from 'react'; // Import useState and useEffect

const Footer = () => {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []); // Empty dependency array ensures this runs once on mount (client-side)

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
        <div className="flex justify-center space-x-6 mb-4">
          {aboutMe.socialLinks.github && (
            <Link href={aboutMe.socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </Link>
          )}
          {aboutMe.socialLinks.linkedin && (
            <Link href={aboutMe.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </Link>
          )}
          {aboutMe.socialLinks.twitter && (
            <Link href={aboutMe.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-6 w-6" />
            </Link>
          )}
        </div>
        <p className="text-sm">
          {currentYear ? `© ${currentYear} ${aboutMe.name}. All rights reserved.` : `© ${aboutMe.name}. All rights reserved.`}
        </p>
        <p className="text-xs mt-1">
          Built with <Link href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline underline-offset-2">Next.js</Link> and love.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

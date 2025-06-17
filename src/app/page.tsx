
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Briefcase, Lightbulb, MessageCircle, Mail } from 'lucide-react';
import { aboutMe, skills } from '@/data/about';
import { projects } from '@/data/portfolio';
import ProjectCard from '@/components/ProjectCard';
import { ContactForm } from '@/app/contact/ContactForm';

export default function Home() {
  const featuredSkills = skills.slice(0, 6);
  const featuredProjects = projects.slice(0,3);

  return (
    <div className="space-y-16 py-8 md:py-12">
      {/* Hero Section */}
      <section className="container mx-auto px-4 text-center">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="md:text-left">
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-primary leading-tight">
              {aboutMe.name}
            </h1>
            <p className="text-xl sm:text-2xl text-foreground/80 mb-8 font-medium text-balance">
              {aboutMe.tagline}
            </p>
            <p className="text-lg text-foreground/70 mb-10 text-balance">
              {aboutMe.bio.substring(0, 200)}... {/* Short bio snippet */}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="group transition-all duration-300 ease-in-out hover:shadow-lg">
                <Link href="/portfolio">
                  View My Work <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="group transition-all duration-300 ease-in-out hover:shadow-md">
                <Link href="/contact">
                  Get In Touch <MessageCircle className="ml-2 h-5 w-5 group-hover:animate-pulse transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative group aspect-square max-w-md mx-auto md:max-w-none">
             <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <Image
              src={aboutMe.profileImageUrl}
              alt={aboutMe.name}
              width={400}
              height={400}
              priority
              className="rounded-full object-cover shadow-2xl mx-auto relative z-10 border-4 border-card"
              data-ai-hint={aboutMe.dataAiHint}
            />
          </div>
        </div>
      </section>

      {/* Featured Skills Section */}
      <section className="container mx-auto px-4">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
          My Core <span className="text-primary">Expertise</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {featuredSkills.map((skill) => (
            <Card key={skill.name} className="text-center p-6 hover:shadow-xl transition-shadow duration-300 bg-card/80 backdrop-blur-sm">
              <CardContent className="flex flex-col items-center justify-center">
                {skill.icon && <skill.icon className="h-12 w-12 text-primary mb-4" />}
                <p className="font-semibold text-lg">{skill.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
         <div className="text-center mt-12">
          <Button asChild variant="link" className="text-primary text-lg">
            <Link href="/about#skills">See all skills <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="container mx-auto px-4">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
             <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" className="group transition-all duration-300 ease-in-out hover:shadow-lg">
            <Link href="/portfolio">
              Explore All Projects <Briefcase className="ml-2 h-5 w-5 group-hover:rotate-[15deg] transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-card p-8 md:p-10 rounded-lg shadow-xl"> {/* Removed max-w-2xl mx-auto */}
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-3 text-primary">
            Let's Connect
          </h2>
          <p className="text-center text-foreground/70 mb-8 text-balance">
            Have a question or want to work together? Send me a message!
          </p>
          <ContactForm />
        </div>
      </section>

      {/* Call to Action - Cover Letter Generator */}
      <section className="bg-gradient-to-r from-primary to-accent/80 text-primary-foreground py-16 rounded-lg shadow-xl">
        <div className="container mx-auto px-4 text-center">
          <Lightbulb className="h-16 w-16 mx-auto mb-6 text-background" />
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">
            Need a Professional Cover Letter?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-balance">
            Leverage AI to craft a personalized cover letter based on your profile and the job description. Get a head start on your application!
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-background text-primary hover:bg-background/90 group transition-all duration-300 ease-in-out hover:shadow-lg">
            <Link href="/cover-letter-generator">
              Try the AI Generator <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

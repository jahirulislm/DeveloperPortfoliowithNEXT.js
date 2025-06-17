import Image from 'next/image';
import { aboutMe, skills, experiences, education } from '@/data/about';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Briefcase, GraduationCap, Brain, Download, Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
  title: `About ${aboutMe.name} | DevSpace`,
  description: `Learn more about ${aboutMe.name}, a passionate web developer. Discover skills, experience, and education.`,
};

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Profile Header */}
      <section className="mb-16 text-center md:text-left">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 flex justify-center">
            <div className="relative group w-64 h-64 md:w-72 md:h-72">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-60 group-hover:opacity-80 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <Image
                src={aboutMe.profileImageUrl}
                alt={aboutMe.name}
                width={300}
                height={300}
                priority
                className="rounded-full object-cover shadow-2xl mx-auto relative z-10 border-4 border-card"
                data-ai-hint={aboutMe.dataAiHint}
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">{aboutMe.name}</h1>
            <p className="text-xl text-foreground/80 font-medium mb-6">{aboutMe.tagline}</p>
            <p className="text-md text-foreground/70 leading-relaxed mb-8 text-balance">{aboutMe.bio}</p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button asChild className="group transition-all duration-300 ease-in-out hover:shadow-lg">
                <Link href="/contact">
                  Contact Me <Mail className="ml-2 h-4 w-4 group-hover:animate-bounce" />
                </Link>
              </Button>
              {/* <Button variant="outline" asChild className="group transition-all duration-300 ease-in-out hover:shadow-md">
                <Link href="/path-to-resume.pdf" target="_blank" download>
                  Download CV <Download className="ml-2 h-4 w-4 group-hover:animate-wiggle" />
                </Link>
              </Button> */}
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 justify-center md:justify-start text-sm text-foreground/70">
                {aboutMe.socialLinks.email && (
                    <Link href={aboutMe.socialLinks.email} className="flex items-center hover:text-primary transition-colors"><Mail className="mr-2 h-4 w-4" /> Email</Link>
                )}
                {aboutMe.socialLinks.linkedin && (
                    <Link href={aboutMe.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors"><Linkedin className="mr-2 h-4 w-4" /> LinkedIn</Link>
                )}
                {aboutMe.socialLinks.github && (
                    <Link href={aboutMe.socialLinks.github} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors"><Github className="mr-2 h-4 w-4" /> GitHub</Link>
                )}
                 {aboutMe.socialLinks.twitter && (
                    <Link href={aboutMe.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors"><Twitter className="mr-2 h-4 w-4" /> Twitter</Link>
                )}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mb-16 scroll-mt-20">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-10">
          <Brain className="inline-block h-10 w-10 mr-3 text-primary" /> My <span className="text-primary">Skills</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <Card key={skill.name} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center mb-3">
                  {skill.icon && <skill.icon className="h-7 w-7 mr-3 text-primary" />}
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                {skill.level && (
                  <div className="flex items-center">
                    <Progress value={skill.level} className="w-full h-2.5" aria-label={`${skill.name} proficiency ${skill.level}%`} />
                    <span className="ml-3 text-sm font-medium text-primary">{skill.level}%</span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="mb-16 scroll-mt-20">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-10">
           <Briefcase className="inline-block h-10 w-10 mr-3 text-primary" /> Work <span className="text-primary">Experience</span>
        </h2>
        <div className="space-y-8 relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-border transform md:-translate-x-1/2 hidden sm:block"></div>
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`flex sm:items-center group ${index % 2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}>
              <div className="hidden sm:block sm:w-1/2"></div>
              <div className="hidden sm:block sm:w-10 h-10 bg-primary rounded-full absolute left-0 md:left-1/2 top-1/2 transform -translate-y-1/2 md:-translate-x-1/2 shadow-md border-4 border-card flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-primary-foreground"/>
              </div>
              <Card className={`w-full sm:w-1/2 shadow-lg hover:shadow-xl transition-shadow duration-300 ${index % 2 === 0 ? 'sm:mr-[calc(2.5rem+1px)] sm:text-right' : 'sm:ml-[calc(2.5rem+1px)] sm:text-left'}`}>
                <CardHeader>
                  <div className={`flex items-center gap-3 ${index % 2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}>
                    {exp.logoUrl && (
                      <Image src={exp.logoUrl} alt={`${exp.company} logo`} width={40} height={40} className="rounded-md object-contain" data-ai-hint={exp.dataAiHint} />
                    )}
                    <CardTitle className="text-xl font-headline">{exp.title}</CardTitle>
                  </div>
                  <CardDescription className={`text-md ${index % 2 === 0 ? 'sm:text-right' : 'sm:text-left'}`}>
                    {exp.company} &bull; <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 leading-relaxed">{exp.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="scroll-mt-20">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-10">
          <GraduationCap className="inline-block h-10 w-10 mr-3 text-primary" /> My <span className="text-primary">Education</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu) => (
            <Card key={edu.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                    {edu.logoUrl && (
                      <Image src={edu.logoUrl} alt={`${edu.institution} logo`} width={40} height={40} className="rounded-md object-contain" data-ai-hint={edu.dataAiHint} />
                    )}
                    <CardTitle className="text-xl font-headline">{edu.degree}</CardTitle>
                </div>
                <CardDescription>
                  {edu.institution} &bull; <span className="text-sm text-muted-foreground">{edu.period}</span>
                </CardDescription>
              </CardHeader>
              {edu.description && (
                <CardContent>
                  <p className="text-foreground/80">{edu.description}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

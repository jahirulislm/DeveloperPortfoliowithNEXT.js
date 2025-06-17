import { projects } from '@/data/portfolio';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Markdown from 'markdown-to-jsx';
import { Card, CardContent } from '@/components/ui/card';

type Props = {
  params: { projectId: string };
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    projectId: project.id,
  }));
}

export async function generateMetadata({ params }: Props) {
  const project = projects.find(p => p.id === params.projectId);
  if (!project) {
    return { title: 'Project Not Found' };
  }
  return {
    title: `${project.title} | Portfolio - DevSpace`,
    description: project.description,
  };
}

const ProjectDetailPage = ({ params }: Props) => {
  const project = projects.find(p => p.id === params.projectId);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Button variant="outline" asChild>
          <Link href="/portfolio">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Link>
        </Button>
      </div>

      <article className="bg-card p-6 sm:p-8 rounded-lg shadow-xl">
        <header className="mb-8">
          <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden mb-6 shadow-lg">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              priority
              className="object-cover"
              data-ai-hint={project.dataAiHint}
            />
          </div>
          <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3">{project.title}</h1>
          <p className="text-lg text-foreground/70 mb-6">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map(tag => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <Button asChild>
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> View Live
                </Link>
              </Button>
            )}
            {project.repoUrl && (
              <Button variant="outline" asChild>
                <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> Source Code
                </Link>
              </Button>
            )}
          </div>
        </header>

        <hr className="my-8 border-border" />

        {project.details && (
          <Card className="bg-background/50">
            <CardContent className="prose prose-sm sm:prose-base dark:prose-invert max-w-none py-6 px-4 md:px-6
              prose-headings:font-headline prose-headings:text-primary prose-headings:mb-2 prose-headings:mt-6
              prose-p:leading-relaxed prose-p:text-foreground/80
              prose-a:text-primary hover:prose-a:underline
              prose-strong:text-foreground
              prose-blockquote:border-l-primary prose-blockquote:text-foreground/70
              prose-ul:list-disc prose-ul:ml-6 prose-li:text-foreground/80
              prose-ol:list-decimal prose-ol:ml-6 prose-li:text-foreground/80
              prose-code:bg-muted prose-code:text-foreground prose-code:px-1 prose-code:py-0.5 prose-code:rounded-sm prose-code:font-code
              prose-pre:bg-muted prose-pre:p-4 prose-pre:rounded-md prose-pre:overflow-x-auto
            ">
              <Markdown>{project.details}</Markdown>
            </CardContent>
          </Card>
        )}
      </article>
    </div>
  );
};

export default ProjectDetailPage;

import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="flex flex-col h-full overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1 border-border/70 hover:border-primary">
      <CardHeader className="p-0">
        <div className="relative w-full aspect-video overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            data-ai-hint={project.dataAiHint}
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="font-headline text-2xl mb-2 group-hover:text-primary transition-colors">{project.title}</CardTitle>
        <CardDescription className="text-foreground/70 mb-4 line-clamp-3">{project.description}</CardDescription>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 bg-muted/30 border-t border-border/50">
        <div className="flex justify-between w-full items-center">
          <Button asChild variant="link" className="p-0 h-auto text-primary group-hover:underline">
            <Link href={`/portfolio/${project.id}`}>
              View Details <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <div className="flex gap-2">
            {project.liveUrl && (
              <Button asChild variant="outline" size="sm" className="group/icon-btn">
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="View Live Project">
                  <ExternalLink className="h-4 w-4 mr-1 transition-transform group-hover/icon-btn:scale-110" /> Live
                </Link>
              </Button>
            )}
            {project.repoUrl && (
              <Button asChild variant="outline" size="sm" className="group/icon-btn">
                <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label="View Source Code">
                   <Github className="h-4 w-4 mr-1 transition-transform group-hover/icon-btn:scale-110" /> Code
                </Link>
              </Button>
            )}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;

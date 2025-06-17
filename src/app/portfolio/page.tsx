import { projects } from '@/data/portfolio';
import ProjectCard from '@/components/ProjectCard';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export const metadata = {
  title: 'Portfolio | DevSpace',
  description: 'Explore a collection of projects showcasing skills in web development, design, and more.',
};

// This page will be a server component, for client-side filtering, we'd need a client component wrapper
const PortfolioPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">My Portfolio</h1>
        <p className="text-lg text-foreground/70 mt-4 max-w-2xl mx-auto text-balance">
          A curated collection of my work, demonstrating my skills and passion for creating innovative web solutions.
        </p>
      </header>

      {/* TODO: Add filtering/search functionality if needed with a client component */}
      {/* <div className="mb-8 max-w-md mx-auto">
        <div className="relative">
          <Input type="search" placeholder="Search projects..." className="pl-10" />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </div>
      </div> */}

      {projects.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-xl text-muted-foreground">No projects to display at the moment. Check back soon!</p>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;

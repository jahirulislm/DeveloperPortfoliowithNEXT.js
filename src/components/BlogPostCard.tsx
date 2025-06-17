import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, CalendarDays, UserCircle } from 'lucide-react';
import {format} from 'date-fns';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <Card className="flex flex-col h-full overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1 border-border/70 hover:border-primary">
       {post.imageUrl && (
        <CardHeader className="p-0">
            <div className="relative w-full aspect-video overflow-hidden">
            <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                data-ai-hint={post.dataAiHint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
        </CardHeader>
      )}
      <CardContent className="p-6 flex-grow">
        <CardTitle className="font-headline text-2xl mb-2 group-hover:text-primary transition-colors">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </CardTitle>
        <div className="flex items-center text-sm text-muted-foreground mb-3 space-x-4">
            <span className="flex items-center"><CalendarDays className="mr-1.5 h-4 w-4"/> {format(new Date(post.date), 'MMM dd, yyyy')}</span>
            {post.author && <span className="flex items-center"><UserCircle className="mr-1.5 h-4 w-4"/> {post.author}</span>}
        </div>
        <CardDescription className="text-foreground/70 mb-4 line-clamp-3">{post.excerpt}</CardDescription>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="transition-colors group-hover:border-accent group-hover:text-accent-foreground">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="p-6 bg-muted/30 border-t border-border/50">
        <Link href={`/blog/${post.slug}`} className="text-primary font-semibold hover:underline flex items-center group-hover:text-primary/80 transition-colors">
          Read More <ArrowUpRight className="ml-1 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogPostCard;

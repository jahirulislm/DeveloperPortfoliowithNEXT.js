import { blogPosts } from '@/data/blog';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CalendarDays, UserCircle } from 'lucide-react';
import Link from 'next/link';
import Markdown from 'markdown-to-jsx';
import {format} from 'date-fns';
import { Card, CardContent } from '@/components/ui/card';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const post = blogPosts.find(p => p.slug === params.slug);
  if (!post) {
    return { title: 'Post Not Found' };
  }
  return {
    title: `${post.title} | Blog - DevSpace`,
    description: post.excerpt,
    keywords: post.tags?.join(', '),
    authors: post.author ? [{ name: post.author }] : [],
  };
}

const BlogPostPage = ({ params }: Props) => {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <Button variant="outline" asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
        </Button>
      </div>

      <article className="bg-card p-6 sm:p-8 md:p-10 rounded-lg shadow-xl">
        <header className="mb-8">
          {post.imageUrl && (
            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden mb-6 shadow-lg">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                priority
                className="object-cover"
                data-ai-hint={post.dataAiHint}
              />
            </div>
          )}
          <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">{post.title}</h1>
          <div className="flex flex-wrap items-center text-sm text-muted-foreground mb-4 space-x-4">
            <span className="flex items-center"><CalendarDays className="mr-1.5 h-4 w-4"/> {format(new Date(post.date), 'MMMM dd, yyyy')}</span>
            {post.author && <span className="flex items-center"><UserCircle className="mr-1.5 h-4 w-4"/> By {post.author}</span>}
          </div>
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
          )}
        </header>
        
        <hr className="my-8 border-border" />

        <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-none
            prose-headings:font-headline prose-headings:text-primary prose-headings:mb-3 prose-headings:mt-8
            prose-p:leading-relaxed prose-p:text-foreground/80 prose-p:mb-4
            prose-a:text-primary hover:prose-a:underline
            prose-strong:text-foreground
            prose-blockquote:border-l-primary prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-foreground/70
            prose-ul:list-disc prose-ul:ml-5 prose-li:text-foreground/80 prose-li:mb-1
            prose-ol:list-decimal prose-ol:ml-5 prose-li:text-foreground/80 prose-li:mb-1
            prose-code:bg-muted prose-code:text-foreground prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:font-code prose-code:text-sm
            prose-pre:bg-muted prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-pre:shadow-inner
            prose-img:rounded-lg prose-img:shadow-md prose-img:mx-auto
        ">
          <Markdown>{post.content}</Markdown>
        </div>
        
      </article>
    </div>
  );
};

export default BlogPostPage;

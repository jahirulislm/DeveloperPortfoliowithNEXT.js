import { blogPosts } from '@/data/blog';
import BlogPostCard from '@/components/BlogPostCard';
// import { Input } from '@/components/ui/input'; // For search functionality
// import { Search } from 'lucide-react'; // For search functionality

export const metadata = {
  title: 'Blog | DevSpace',
  description: 'Read articles and insights on web development, technology, and more.',
};

const BlogPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Tech & Thoughts</h1>
        <p className="text-lg text-foreground/70 mt-4 max-w-2xl mx-auto text-balance">
          Exploring the world of web development, sharing insights, tutorials, and reflections on the latest trends.
        </p>
      </header>

      {/* TODO: Add filtering/search functionality if needed
      <div className="mb-8 max-w-md mx-auto">
        <div className="relative">
          <Input type="search" placeholder="Search articles..." className="pl-10" />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </div>
      </div> 
      */}

      {blogPosts.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
         <div className="text-center py-10">
          <p className="text-xl text-muted-foreground">No blog posts yet. Stay tuned for updates!</p>
        </div>
      )}
    </div>
  );
};

export default BlogPage;

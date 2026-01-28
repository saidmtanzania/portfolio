import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function Home() {
  const allPosts = getAllPosts();
  const recentPosts = allPosts.slice(0, 3);

  return (
    <div className="flex flex-col gap-16 animate-fade-in delay-100 pb-20">
      {/* Hero / Bio */}
      <section className="flex flex-col gap-6 pt-10">
        <h1 className="text-4xl font-extrabold tracking-tighter">Backend Engineer</h1>
        <div className="prose dark:prose-invert text-muted-foreground leading-relaxed max-w-xl">
          <p>
            I build the logical engines behind web applications.
            Detailed-oriented Backend Engineer specializing in <strong>Node.js</strong> and <strong>System Architecture</strong>.
          </p>
          <p>
            Currently focused on reliable distributed systems and data integrity.
          </p>
        </div>
        <div className="flex gap-4 pt-2">
          <Link
            href="/projects"
            className="px-5 py-2.5 bg-foreground text-background rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
          >
            View Work
          </Link>
          <Link
            href="/about"
            className="px-5 py-2.5 border border-border rounded-md text-sm font-medium hover:bg-muted transition-colors"
          >
            About Me
          </Link>
        </div>
      </section>

      {/* Blog Teaser */}
      <section className="flex flex-col gap-6">
        <h2 className="text-xl font-bold tracking-tight">Recent Writing</h2>
        <div className="flex flex-col gap-4">
          {recentPosts.length > 0 ? (
            recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-1 p-4 -mx-4 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex justify-between items-baseline">
                  <h3 className="font-medium group-hover:text-primary transition-colors">{post.title}</h3>
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">{post.date}</span>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {post.excerpt}
                </p>
              </Link>
            ))
          ) : (
            <p className="text-sm text-muted-foreground">No posts yet.</p>
          )}
        </div>
        <Link href="/blog" className="text-sm font-medium underline underline-offset-4 hover:text-muted-foreground self-start">
          View all posts
        </Link>
      </section>
    </div>
  );
}

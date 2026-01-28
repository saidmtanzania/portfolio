import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function Home() {
  const allPosts = getAllPosts();
  const recentPosts = allPosts.slice(0, 3);

  return (
    <div className="flex flex-col gap-12 animate-fade-in delay-100">
      <section className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tighter">Backend Developer & Architect</h1>
        <p className="text-muted-foreground leading-relaxed">
          Hi, I&apos;m Said. I build robust, scalable server-side applications.
          I specialize in distributed systems, microservices, and high-performance databases.
          Currently focused on optimizing cloud infrastructure.
        </p>
        <div className="flex gap-4 mt-2">
          <Link
            href="mailto:contact@example.com"
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Contact Me
          </Link>
          <Link
            href="/blog"
            className="px-4 py-2 border border-border rounded-md text-sm font-medium hover:bg-muted transition-colors"
          >
            Read Blog
          </Link>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-xl font-semibold tracking-tight">Recent Thoughts</h2>
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

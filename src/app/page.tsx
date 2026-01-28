import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function Home() {
  const allPosts = getAllPosts();
  const recentPosts = allPosts.slice(0, 3);

  return (
    <div className="flex flex-col gap-12 sm:gap-16 animate-fade-in delay-100 pb-20">
      {/* Hero / Bio */}
      <section className="flex flex-col gap-4 sm:gap-6 pt-6 sm:pt-10 text-left">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tighter">Saidi Hamisi</h1>
        <div className="text-muted-foreground leading-relaxed max-w-xl text-base sm:text-lg">
          <p className="mb-4">
            <strong>Backend Software Engineer</strong> with 2.5+ years of experience designing secure, scalable APIs.
          </p>
          <p>
            Specializing in <strong>Node.js</strong> and <strong>ASP.NET Core</strong>. Currently building production-grade services at <strong>DataBalk</strong>.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            href="/projects"
            className="btn-primary inline-flex items-center justify-center px-5 py-2.5 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
          >
            View Work
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-5 py-2.5 border border-border rounded-md text-sm font-medium hover:bg-muted transition-colors"
          >
            About Me
          </Link>
        </div>
      </section>

      {/* Blog Teaser */}
      <section className="flex flex-col gap-6">
        <h2 className="text-xl font-bold tracking-tight text-left">Recent Writing</h2>
        <div className="flex flex-col gap-4">
          {recentPosts.length > 0 ? (
            recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-1 p-4 -mx-4 rounded-lg hover:bg-muted/50 transition-colors text-left"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-2">
                  <h3 className="font-medium group-hover:text-primary transition-colors line-clamp-2 sm:line-clamp-none">{post.title}</h3>
                  <span className="text-xs text-muted-foreground whitespace-nowrap self-start sm:self-auto">{post.date}</span>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {post.excerpt}
                </p>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-1">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full border border-border bg-muted/30 px-2.5 py-1 text-[11px] font-medium text-foreground/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
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

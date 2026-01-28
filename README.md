# Portfolio & Blog (Next.js + Backend Logic)

A minimalist, high-performance portfolio for a Backend Developer. Built with Next.js, Tailwind CSS, and Markdown for content management.

## Features

- **Minimalist Design**: Clean aesthetics focusing on content and readability.
- **Blog System**: Markdown-based blog with syntax highlighting for code blocks.
- **Backend Integration**: 
  - Server-side file processing for blog posts.
  - API Route (`/api/posts`) exposing blog data as JSON.
  - Optimized Static Site Generation (SSG) for fast performance.
- **SEO Optimized**: Auto-generated `sitemap.xml` and `robots.txt`.
- **Responsive**: Fully responsive design for all devices.

## Project Structure

```
src/
├── app/
│   ├── api/          # Backend API routes
│   │   └── posts/    # GET /api/posts endpoint
│   ├── blog/         # Blog page and dynamic slug routes
│   ├── globals.css   # Global styles & Tailwind configuration
│   ├── layout.tsx    # Root layout with Header/Footer
│   └── page.tsx      # Homepage
├── components/       # Reusable UI components (Header, Footer)
├── lib/              # Backend logic / Data access layer
│   └── posts.ts      # Markdown file processing logic
content/
└── posts/            # Markdown blog posts
```

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   npm start
   ```

## Adding Content

To add a new blog post, create a `.md` file in `content/posts/` with the following frontmatter:

```markdown
---
title: "Your Post Title"
date: "YYYY-MM-DD"
excerpt: "A brief summary of your post."
tags: ["tag1", "tag2"]
---

Your markdown content here...
```

## Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: Markdown + gray-matter
- **Language**: TypeScript

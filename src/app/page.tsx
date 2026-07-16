import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "SEO-first Next.js 14 starter with metadata API, sitemap, robots and JSON-LD.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-neutral-950 text-white px-6">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight">
          Next.js SEO Starter
        </h1>
        <p className="text-neutral-400 text-lg">
          Next.js 14 App Router, TypeScript, Tailwind, and SEO baked in from the first commit.
          Metadata API, sitemap, robots, JSON-LD helpers and Open Graph defaults ready to ship.
        </p>
        <div className="flex flex-wrap gap-3 justify-center pt-4">
          <a
            href="https://github.com/nazirabas/nextjs-seo-starter"
            className="rounded-full bg-white text-black px-6 py-2 font-medium hover:bg-neutral-200 transition"
          >
            View on GitHub
          </a>
          <a
            href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fnazirabas%2Fnextjs-seo-starter"
            className="rounded-full border border-white/20 px-6 py-2 font-medium hover:bg-white/10 transition"
          >
            Deploy to Vercel
          </a>
        </div>
      </div>
    </main>
  );
}

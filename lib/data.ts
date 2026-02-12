export interface Article {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  views: string;
  content: string; // HTML content
  summary?: string;
  toc?: { id: string; title: string }[];
  trending?: boolean;
  image?: string;
}

// Demo articles - currently disabled
// Uncomment the articles array below when you're ready to add your own content

export const articles: Article[] = [
  {
    slug: "how-i-built-vikizcode-using-nextjs",
    title: "How I Built VikizCode Using Next.js (Step-by-Step)",
    category: "Web Dev 2026",
    readTime: "8 min read",
    date: "February 12, 2026",
    views: "0 views",
    trending: true,
    image: "/blog-images/vikizcodecover.png",
    summary: "A step-by-step breakdown of how I built my own tech blog using Next.js, Tailwind CSS, GitHub, and Netlify — from idea to live deployment.",
    content: `
<img src="/blog-images/vikizcodecover.png" alt="VikizCode cover image" style="width: 100%; border-radius: 12px; margin-bottom: 2rem;" />

<h2>The Hook: Why I Started Building Instead of Just Learning</h2>

<p>I'm an engineering student. For the longest time, I was stuck in tutorial hell — watching course after course, building the same to-do apps, following along without really understanding.</p>

<p>Then I realized something: I wasn't building anything <em>mine</em>.</p>

<p>So I decided to create VikizCode — my own tech blog where I could document what I learn, share insights, and actually have something to show for all those hours spent coding.</p>

<p>This is the story of how I built it from scratch using Next.js. No fluff, no corporate speak — just the real process.</p>

<h2>Why I Built VikizCode</h2>

<p>Three reasons pushed me to finally start:</p>

<h3>1. Personal Brand</h3>
<p>In 2026, having a digital presence isn't optional anymore. Whether you're applying for internships or freelance gigs, people Google you. I wanted them to find something I built, not just my LinkedIn.</p>

<h3>2. Digital Survival Mindset</h3>
<p>The tech world moves fast. If you're not documenting what you learn, you're falling behind. I needed a place to organize my thoughts and share them publicly.</p>

<h3>3. Learning in Public</h3>
<p>There's something powerful about writing for an audience. It forces you to understand things deeply. Plus, helping others learn is the best way to solidify your own knowledge.</p>

<h2>Choosing the Tech Stack</h2>

<p>I didn't want to overcomplicate things. Here's what I chose and why:</p>

<h3>Next.js 14 (App Router)</h3>
<p>Next.js is the obvious choice for modern React apps. The App Router makes routing dead simple, and the developer experience is incredible. Plus, it's what most companies are using in 2026.</p>

<h3>Static Export</h3>
<p>I wanted my blog to be fast and cheap to host. Static export means no server costs, lightning-fast load times, and easy deployment anywhere.</p>

<h3>Tailwind CSS</h3>
<p>I'm not a designer. Tailwind lets me build decent-looking UIs without writing custom CSS. Utility classes might look messy at first, but once you get used to them, you move <em>fast</em>.</p>

<h3>GitHub + Netlify</h3>
<p>Version control with Git is non-negotiable. Netlify makes deployment stupidly easy — push to GitHub, and it auto-deploys. No DevOps headaches.</p>

<h2>Step-by-Step: How I Built It</h2>

<h3>Creating the Next.js Project</h3>

<p>I started with the official Next.js starter:</p>

<pre><code>npx create-next-app@latest vikizcode
cd vikizcode
npm run dev</code></pre>

<p>Simple. Clean. No overthinking.</p>

<h3>Setting Up the Project Structure</h3>

<img src="/blog-images/vikizcodeprojectstructure.png" alt="VikizCode project structure screenshot" style="width: 100%; border-radius: 12px; margin: 2rem 0;" />

<p>I organized everything into clear folders:</p>

<ul>
<li><strong>app/</strong> — All my pages (home, about, contact, blog posts)</li>
<li><strong>components/</strong> — Reusable UI components (Header, Footer, ArticleCard)</li>
<li><strong>lib/</strong> — Data and utility functions</li>
<li><strong>public/</strong> — Static assets like images</li>
</ul>

<p>Keeping it simple meant I could find things quickly without getting lost in folders.</p>

<h3>Designing the UI</h3>

<p>I'm not a designer, so I kept things minimal. I used:</p>

<ul>
<li>A clean blue/indigo color palette</li>
<li>Plenty of white space</li>
<li>Simple card-based layouts</li>
<li>Subtle hover effects for interactivity</li>
</ul>

<p>The goal was "professional but approachable" — not too corporate, not too flashy.</p>

<h3>Handling Blog Routing</h3>

<p>Next.js App Router makes this easy. I created:</p>

<ul>
<li><code>app/blog/[slug]/page.tsx</code> for individual blog posts</li>
<li>A data file in <code>lib/data.ts</code> to store all articles</li>
<li>Dynamic routing that pulls the right article based on the URL</li>
</ul>

<p>No database needed. Just TypeScript objects. Simple and fast.</p>

<h3>Static Generation</h3>

<p>I configured Next.js for static export in <code>next.config.js</code>:</p>

<pre><code>module.exports = {
  output: 'export',
  images: { unoptimized: true }
}</code></pre>

<p>This generates pure HTML/CSS/JS that can be hosted anywhere. No server required.</p>

<h3>Deployment and Going Live</h3>

<img src="/blog-images/vikizcodenetlifydeploy.png" alt="Netlify deployment screen" style="width: 100%; border-radius: 12px; margin: 2rem 0;" />

<p>Deploying to Netlify was the easiest part:</p>

<ol>
<li>Pushed my code to GitHub</li>
<li>Connected my repo to Netlify</li>
<li>Set build command to <code>npm run build</code></li>
<li>Hit deploy</li>
</ol>

<p>Five minutes later, VikizCode was live on the internet.</p>

<h2>Challenges I Faced</h2>

<p>It wasn't all smooth sailing. Here's what tripped me up:</p>

<h3>Stack Confusion</h3>
<p>At first, I tried using a CMS, then considered a database, then thought about using MDX. I wasted days overthinking. Eventually, I just went with the simplest solution: a TypeScript file with article data.</p>

<h3>Overthinking Design</h3>
<p>I spent way too long tweaking colors and spacing. At some point, I had to accept that "good enough" is better than "perfect but never shipped."</p>

<h3>Deployment Fear</h3>
<p>I was scared to deploy. What if something broke? What if people hated it? Turns out, nobody cares as much as you think. Just ship it.</p>

<h3>Wanting Perfection</h3>
<p>The biggest challenge was my own perfectionism. I kept adding features, redesigning components, and delaying launch. Finally, I forced myself to go live with a basic version.</p>

<h2>What I Learned</h2>

<p>Building VikizCode taught me more than any tutorial ever could:</p>

<h3>Launch > Perfection</h3>
<p>A live, imperfect project is infinitely better than a perfect project that never launches. You can always improve later.</p>

<h3>Simplicity Wins</h3>
<p>I tried to add so many features — comments, analytics, newsletter integration. In the end, I stripped it all back. A simple blog that works is better than a complex one that's half-finished.</p>

<h3>Shipping Builds Confidence</h3>
<p>The moment I deployed VikizCode, I felt different. I wasn't just a student following tutorials anymore. I was someone who <em>builds things</em>.</p>

<h2>Final Advice for Engineering Students</h2>

<p>If you're reading this and thinking "I should build something too," here's my advice:</p>

<h3>Build Something Small</h3>
<p>Don't try to build the next Facebook. Build a blog. Build a portfolio. Build a simple tool you'd actually use. Small projects get finished.</p>

<h3>Deploy Publicly</h3>
<p>Don't keep your projects on localhost. Put them on the internet. It's scary, but it's the only way to get real feedback and feel like a real developer.</p>

<h3>Stop Waiting to Feel Ready</h3>
<p>You'll never feel 100% ready. I didn't know everything about Next.js when I started. I learned by building. That's how it works.</p>

<p>So go build something. Make it yours. Ship it. And then do it again.</p>

<p>That's how you actually learn.</p>

<hr style="margin: 3rem 0; border: none; border-top: 1px solid #e5e7eb;" />

<p><em>Want to see the code? VikizCode is open source. Check it out on GitHub and feel free to use it as a starting point for your own blog.</em></p>
        `
  },
  //   title: "Mastering Serverless Functions with TypeScript in 2026",
  //   category: "Cloud Computing",
  //   readTime: "8 min read",
  //   date: "January 14, 2026",
  //   views: "14.4K views",
  //   trending: true,
  //   image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=675&fit=crop",
  //   summary: "This article explores the future of serverless computing in 2026, focusing on advanced TypeScript patterns and best practices. It discusses cold start optimizations, state management strategies, and integrating with emerging cloud services. The guide emphasizes building scalable, cost-effective, and highly maintainable serverless applications within modern hyperscaler landscapes.",
  //   toc: [
  //     { id: "intro", title: "Introduction to Serverless in 2026" },
  //     { id: "setup", title: "Setting Up Your TypeScript Serverless Project" },
  //     { id: "cold-start", title: "Cold Start Optimizations & Best Practices" },
  //     { id: "state-mgmt", title: "State Management in Serverless Workflows" },
  //     { id: "conclusion", title: "Conclusion: The Future is Serverless" },
  //   ],
  //   content: `
  //     <div id="intro">
  //       <h2>Introduction to Serverless in 2026</h2>
  //       <p>Serverless architecture has evolved significantly, moving way past simple FaaS (Function as a Service). In 2026, we see more complex interactions and sophisticated deployment patterns. TypeScript has emerged as the language of choice for building robust and type-safe serverless applications, providing immense testing and developer experience benefits.</p>
  //     </div>

  //     <div id="setup">
  //       <h2>Setting Up Your TypeScript Serverless Project</h2>
  //       <p>To begin, ensure you have Node.js 22 LTS installed. We'll use a monorepo setup with pnpm for efficient dependency management alongside Serverless Framework or AWS SAM for deployment. Consider using a bundler like esbuild or turbopack for blazing fast bundling.</p>

  //       <pre><code class="language-typescript">
  // import { APIGatewayProxyHandler } from 'aws-lambda';
  // import { status } from './utils';

  // export const handler: APIGatewayProxyHandler = async (event) => {
  //   // Parse incoming body
  //   const body = JSON.parse(event.body || '{}');

  //   // Validate with Zod
  //   const validated = schema.safeParse(body);

  //   if (!validated.success) {
  //     return status(400, { message: 'Invalid input', errors: validated.error });
  //   }

  //   return status(200, { message: 'Hello from Serverless 2026!' });
  // };
  //       </code></pre>
  //     </div>

  //     <div id="cold-start">
  //       <h2>Cold Start Optimizations & Best Practices</h2>
  //       <p>Cold starts remain a challenge, but modern techniques significantly mitigate their impact. Using provisioned concurrency, optimizing package sizes, and lazy loading heavy dependencies are critical strategies. Furthermore, strategically structuring your functions to separate dependencies per function is crucial.</p>
  //     </div>

  //     <div id="state-mgmt">
  //       <h2>State Management in Serverless Workflows</h2>
  //       <p>For complex operations, integrating with services like AWS Step Functions, Azure Durable Functions, or Google Cloud Workflows allows you to define complex, multi-step processes without managing servers, handling retries and error handling transparently.</p>
  //       <div class="my-8 bg-blue-50 p-8 rounded-lg text-center text-blue-800 font-mono text-sm">
  //           [Diagram Placeholder: Step Functions Workflow Visualization]
  //       </div>
  //     </div>

  //     <div id="conclusion">
  //       <h2>Conclusion: The Future is Serverless</h2>
  //       <p>The serverless paradigm is more mature than ever. With TypeScript, developers have the tools to build scalable, robust, and maintainable applications that adapt to future demands. Embrace these patterns to stay ahead in the rapidly evolving cloud landscape.</p>
  //     </div>
  //   `,
  // },
  // {
  //   slug: "rise-of-agi-2026",
  //   title: "The Rise of AGI: What to Expect",
  //   category: "AI 2026",
  //   readTime: "8 min read",
  //   date: "Jan 10, 2026",
  //   views: "22K views",
  //   trending: true,
  //   image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=675&fit=crop",
  //   content: "<p>Deep dive into Artificial General Intelligence...</p>",
  // },
  // {
  //   slug: "web-dev-trends",
  //   title: "Web Development Trends for 2026",
  //   category: "Web Dev 2026",
  //   readTime: "12 min read",
  //   date: "Feb 15, 2026",
  //   views: "18K views",
  //   trending: true,
  //   image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=675&fit=crop",
  //   content: "<p>From React Server Components to the decline of...",
  //   summary: "A look at the shifting landscape of web development.",
  // },
  // {
  //   slug: "demystifying-llms",
  //   title: "Demystifying Large Language Models",
  //   category: "AI 2026",
  //   readTime: "7 min read",
  //   date: "Mar 01, 2026",
  //   views: "15.4K views",
  //   image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=1200&h=675&fit=crop",
  //   content: "<p>Understanding the architecture behind GPT-5 and...",
  // },
  // {
  //   slug: "frontend-performance",
  //   title: "Frontend Performance: Next-Gen Optimization",
  //   category: "Web Dev 2026",
  //   readTime: "9 min read",
  //   date: "Mar 05, 2026",
  //   views: "20.4K views",
  //   image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=675&fit=crop",
  //   content: "<p>Optimizing for Core Web Vitals in 2026...</p>",
  // },
  // {
  //   slug: "building-cross-platform-apps",
  //   title: "Building Cross-Platform Apps with Flutter",
  //   category: "App Dev 2026",
  //   readTime: "6 min read",
  //   date: "Mar 10, 2026",
  //   views: "1.8K views",
  //   image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=675&fit=crop",
  //   content: "<p>Flutter continues to dominate the cross-platform...</p>",
  // },
  // {
  //   slug: "threat-landscape-2026",
  //   title: "Threat Landscape 2026: Protecting Your Data",
  //   category: "Cybersecurity",
  //   readTime: "11 min read",
  //   date: "Mar 12, 2026",
  //   views: "12K views",
  //   image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=675&fit=crop",
  //   content: "<p>Cyber threats are evolving. Here is how to stay ahead...</p>",
  // }
];

export function getAllArticles() {
  return articles;
}

export function getTrendingArticles() {
  return articles.filter((article) => article.trending);
}

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getRelatedArticles(currentSlug: string, category: string) {
  return articles
    .filter(a => a.category === category && a.slug !== currentSlug)
    .slice(0, 3);
}

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
}

export const articles: Article[] = [
    {
        slug: "mastering-serverless-functions-typescript-2026",
        title: "Mastering Serverless Functions with TypeScript in 2026",
        category: "Cloud Computing",
        readTime: "8 min read",
        date: "January 14, 2026",
        views: "14.4K views",
        trending: true,
        summary: "This article explores the future of serverless computing in 2026, focusing on advanced TypeScript patterns and best practices. It discusses cold start optimizations, state management strategies, and integrating with emerging cloud services. The guide emphasizes building scalable, cost-effective, and highly maintainable serverless applications within modern hyperscaler landscapes.",
        toc: [
            { id: "intro", title: "Introduction to Serverless in 2026" },
            { id: "setup", title: "Setting Up Your TypeScript Serverless Project" },
            { id: "cold-start", title: "Cold Start Optimizations & Best Practices" },
            { id: "state-mgmt", title: "State Management in Serverless Workflows" },
            { id: "conclusion", title: "Conclusion: The Future is Serverless" },
        ],
        content: `
      <div id="intro">
        <h2>Introduction to Serverless in 2026</h2>
        <p>Serverless architecture has evolved significantly, moving way past simple FaaS (Function as a Service). In 2026, we see more complex interactions and sophisticated deployment patterns. TypeScript has emerged as the language of choice for building robust and type-safe serverless applications, providing immense testing and developer experience benefits.</p>
      </div>

      <div id="setup">
        <h2>Setting Up Your TypeScript Serverless Project</h2>
        <p>To begin, ensure you have Node.js 22 LTS installed. We'll use a monorepo setup with pnpm for efficient dependency management alongside Serverless Framework or AWS SAM for deployment. Consider using a bundler like esbuild or turbopack for blazing fast bundling.</p>
        
        <pre><code class="language-typescript">
import { APIGatewayProxyHandler } from 'aws-lambda';
import { status } from './utils';

export const handler: APIGatewayProxyHandler = async (event) => {
  // Parse incoming body
  const body = JSON.parse(event.body || '{}');
  
  // Validate with Zod
  const validated = schema.safeParse(body);
  
  if (!validated.success) {
    return status(400, { message: 'Invalid input', errors: validated.error });
  }

  return status(200, { message: 'Hello from Serverless 2026!' });
};
        </code></pre>
      </div>

      <div id="cold-start">
        <h2>Cold Start Optimizations & Best Practices</h2>
        <p>Cold starts remain a challenge, but modern techniques significantly mitigate their impact. Using provisioned concurrency, optimizing package sizes, and lazy loading heavy dependencies are critical strategies. Furthermore, strategically structuring your functions to separate dependencies per function is crucial.</p>
      </div>

      <div id="state-mgmt">
        <h2>State Management in Serverless Workflows</h2>
        <p>For complex operations, integrating with services like AWS Step Functions, Azure Durable Functions, or Google Cloud Workflows allows you to define complex, multi-step processes without managing servers, handling retries and error handling transparently.</p>
        <div class="my-8 bg-blue-50 p-8 rounded-lg text-center text-blue-800 font-mono text-sm">
            [Diagram Placeholder: Step Functions Workflow Visualization]
        </div>
      </div>

      <div id="conclusion">
        <h2>Conclusion: The Future is Serverless</h2>
        <p>The serverless paradigm is more mature than ever. With TypeScript, developers have the tools to build scalable, robust, and maintainable applications that adapt to future demands. Embrace these patterns to stay ahead in the rapidly evolving cloud landscape.</p>
      </div>
    `,
    },
    {
        slug: "rise-of-agi-2026",
        title: "The Rise of AGI: What to Expect",
        category: "AI 2026",
        readTime: "8 min read",
        date: "Jan 10, 2026",
        views: "22K views",
        trending: true,
        content: "<p>Deep dive into Artificial General Intelligence...</p>",
    },
    {
        slug: "web-dev-trends",
        title: "Web Development Trends for 2026",
        category: "Web Dev 2026",
        readTime: "12 min read",
        date: "Feb 15, 2026",
        views: "18K views",
        trending: true,
        content: "<p>From React Server Components to the decline of...",
        summary: "A look at the shifting landscape of web development.",
    },
    {
        slug: "demystifying-llms",
        title: "Demystifying Large Language Models",
        category: "AI 2026",
        readTime: "7 min read",
        date: "Mar 01, 2026",
        views: "15.4K views",
        content: "<p>Understanding the architecture behind GPT-5 and...",
    },
    {
        slug: "frontend-performance",
        title: "Frontend Performance: Next-Gen Optimization",
        category: "Web Dev 2026",
        readTime: "9 min read",
        date: "Mar 05, 2026",
        views: "20.4K views",
        content: "<p>Optimizing for Core Web Vitals in 2026...",
    },
    {
        slug: "building-cross-platform-apps",
        title: "Building Cross-Platform Apps with Flutter",
        category: "App Dev 2026",
        readTime: "6 min read",
        date: "Mar 10, 2026",
        views: "1.8K views",
        content: "<p>Flutter continues to dominate the cross-platform...",
    },
    {
        slug: "threat-landscape-2026",
        title: "Threat Landscape 2026: Protecting Your Data",
        category: "Cybersecurity",
        readTime: "11 min read",
        date: "Mar 12, 2026",
        views: "12K views",
        content: "<p>Cyber threats are evolving. Here is how to stay ahead...",
    }
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

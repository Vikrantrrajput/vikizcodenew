import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ArticleCardProps {
    title: string;
    category: string;
    readTime: string;
    slug: string;
    image?: string;
    className?: string; // For additional styling
    trending?: boolean;
}

export default function ArticleCard({
    title,
    category,
    readTime,
    slug,
    image,
    trending = false,
    className,
}: ArticleCardProps) {
    return (
        <Link href={`/blog/${slug}`} className={cn("group block relative flex flex-col overflow-hidden rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/20 h-full", className)}>
            {/* Image & Title Area */}
            <div className="relative h-64 w-full overflow-hidden">
                {/* Featured Image or Brand Fallback */}
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        unoptimized // For static export compatibility
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 dark:from-blue-500 dark:via-indigo-500 dark:to-blue-600" />
                )}

                {/* Scrim/Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

                {/* Content Overlay */}
                <div className="absolute inset-0 z-20 p-5 flex flex-col justify-end">
                    <div className="flex items-center justify-between mb-3">
                        <span className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase backdrop-blur-md border border-white/20 text-white shadow-sm transition-colors bg-white/10")}>
                            {trending && <span className="mr-1">🔥</span>}
                            {category}
                        </span>

                        {/* Tech icon based on category */}
                        <div className="opacity-40 text-white">
                            {category.includes("AI") ? (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54Z" /><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54Z" /></svg>
                            ) : category.includes("Web") ? (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                            ) : category.includes("Cloud") ? (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19a5.5 5.5 0 0 0 2.5-10.5 8.5 8.5 0 1 0-15.5 1.5A7 7 0 1 0 5 20h12a5.5 5.5 0 0 0 .5-1z" /></svg>
                            ) : category.includes("App") ? (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
                            ) : (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></svg>
                            )}
                        </div>
                    </div>

                    <h3 className="font-bold leading-tight tracking-tight text-xl line-clamp-2 text-white group-hover:text-blue-300 transition-colors duration-300">
                        {title}
                    </h3>

                    <div className="flex items-center mt-3">
                        <span className="text-[10px] font-semibold tracking-widest uppercase text-zinc-300/80">{readTime}</span>
                        <div className="h-[1px] flex-1 ml-3 bg-white/10" />
                    </div>
                </div>
            </div>
        </Link>
    );
}

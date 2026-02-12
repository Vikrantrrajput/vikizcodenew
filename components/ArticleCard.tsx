import Link from "next/link";
import { cn } from "@/lib/utils";

interface ArticleCardProps {
    title: string;
    category: string;
    readTime: string;
    slug: string;
    className?: string; // For additional styling
    trending?: boolean;
}

export default function ArticleCard({
    title,
    category,
    readTime,
    slug,
    trending = false,
    className,
}: ArticleCardProps) {
    return (
        <Link href={`/blog/${slug}`} className={cn("group block relative flex flex-col space-y-3 overflow-hidden rounded-lg bg-white p-4 shadow-sm transition-all hover:shadow-md border h-full", className)}>
            {/* Image Placeholder */}
            <div className="aspect-[16/9] w-full overflow-hidden rounded-md bg-gray-100 relative group-hover:scale-[1.02] transition-transform duration-300">
                {/* Dynamic Gradient based on category could be cool */}
                <div className={cn("w-full h-full flex items-center justify-center text-white font-bold text-2xl",
                    category.includes("AI") ? "bg-gradient-to-br from-indigo-500 to-purple-600" :
                        category.includes("Web") ? "bg-gradient-to-br from-blue-400 to-cyan-500" :
                            category.includes("Cyber") ? "bg-gradient-to-br from-slate-700 to-slate-900" :
                                category.includes("Cloud") ? "bg-gradient-to-br from-sky-400 to-blue-600" :
                                    "bg-gradient-to-br from-orange-400 to-red-500"
                )}>
                    {category.split(" ")[0]}
                </div>
            </div>

            <div className="flex flex-col space-y-2 flex-1">
                <div className="flex items-center justify-between">
                    <span className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
                        category.includes("AI") ? "bg-purple-100 text-purple-800" :
                            category.includes("Web") ? "bg-blue-100 text-blue-800" :
                                "bg-gray-100 text-gray-800"
                    )}>
                        {trending && <span className="mr-1">🔥</span>}
                        {category}
                    </span>
                    <span className="text-xs text-gray-400">{readTime}</span>
                </div>

                <h3 className="font-bold leading-tight tracking-tight text-lg line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {title}
                </h3>
            </div>
        </Link>
    );
}

import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link className="flex items-center gap-2 font-bold text-xl text-blue-600" href="/">
                    <span>&lt;/&gt;</span>
                    <span>VikizCode</span>
                </Link>
                <nav className="hidden md:flex gap-6 text-sm font-medium">
                    <Link className="text-blue-600" href="/">
                        Home
                    </Link>
                    <Link className="text-gray-500 hover:text-blue-600" href="/category">
                        Categories
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <button className="md:hidden text-2xl">
                        ☰
                    </button>
                </div>
            </div>
        </header>
    );
}

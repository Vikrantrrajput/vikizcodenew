"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link className="flex items-center gap-2 font-bold text-lg sm:text-xl text-blue-600" href="/">
                    <span>&lt;/&gt;</span>
                    <span>VikizCode</span>
                </Link>
                <nav className="hidden md:flex gap-6 text-sm font-medium">
                    <Link className="text-blue-600 transition-colors" href="/">
                        Home
                    </Link>
                    <Link className="text-gray-500 hover:text-blue-600 transition-colors" href="/category">
                        blogs
                    </Link>
                    <Link className="text-gray-500 hover:text-blue-600 transition-colors" href="/about">
                        About
                    </Link>
                    <Link className="text-gray-500 hover:text-blue-600 transition-colors" href="/contact">
                        Contact
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-2xl p-2 hover:bg-gray-100 rounded-md transition-colors"
                        aria-label="Toggle mobile menu"
                    >
                        {mobileMenuOpen ? "✕" : "☰"}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t bg-white">
                    <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
                        <Link
                            className="text-blue-600 font-medium py-2 px-3 hover:bg-blue-50 rounded-md transition-colors"
                            href="/"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            className="text-gray-700 font-medium py-2 px-3 hover:bg-gray-50 rounded-md transition-colors"
                            href="/category"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            blogs
                        </Link>
                        <Link
                            className="text-gray-700 font-medium py-2 px-3 hover:bg-gray-50 rounded-md transition-colors"
                            href="/about"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            className="text-gray-700 font-medium py-2 px-3 hover:bg-gray-50 rounded-md transition-colors"
                            href="/contact"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}

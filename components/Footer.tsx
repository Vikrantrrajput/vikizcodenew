"use client";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");

        // Simulating API call
        setTimeout(() => {
            setStatus("success");
            setEmail("");
        }, 1500);
    };

    return (
        <footer className="w-full bg-white border-t mt-12 py-8 md:py-12">
            <div className="container mx-auto px-4 md:px-6 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-4 text-center sm:text-left">
                    <Link className="flex items-center gap-2 font-bold text-xl text-blue-600 justify-center sm:justify-start" href="/">
                        <span>&lt;/&gt;</span>
                        <span>VikizCode</span>
                    </Link>
                    <p className="text-sm text-gray-500">
                        Engineering Growth Through Tech, Skills, and Career Clarity.                    </p>
                    <div className="flex gap-4 justify-center sm:justify-start">
                        {/* Icons */}
                        <a
                            href="https://x.com/vikizcode_in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-blue-100 hover:text-blue-600 cursor-pointer transition-colors"
                        >
                            𝕏
                        </a>
                        <a
                            href="https://www.linkedin.com/in/vikrant-rajput-986319226/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-blue-100 hover:text-blue-600 cursor-pointer transition-colors"
                        >
                            in
                        </a>
                    </div>
                </div>

                <div className="space-y-4 col-span-1 sm:col-span-2 lg:col-span-2">
                    <h4 className="font-semibold text-center sm:text-left">Stay Up-to-Date</h4>
                    <p className="text-sm text-gray-500 text-center sm:text-left">Get practical insights on tech, learning systems, and career positioning.</p>
                    <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto sm:mx-0">
                        {status === "success" ? (
                            <div className="text-green-600 text-sm font-medium p-3 bg-green-50 rounded text-center w-full animate-in fade-in zoom-in duration-300">
                                Thanks for subscribing! We'll notify you on your email.
                            </div>
                        ) : (
                            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full">
                                <input
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                                    placeholder="Your email address"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-6 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 transition-colors whitespace-nowrap disabled:opacity-70"
                                >
                                    {status === "loading" ? "Joining..." : "Subscribe"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                <div className="space-y-4 text-center sm:text-left">
                    <h4 className="font-semibold">Quick Links</h4>
                    <ul className="space-y-2 text-sm text-gray-500">
                        <li><Link href="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
                        <li><Link href="/category" className="hover:text-blue-600 transition-colors">blogs</Link></li>
                        <li><Link href="/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
                        <li><Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-4 md:px-6 mt-8 pt-6 md:pt-8 border-t text-center text-xs text-gray-400">
                © 2026 VikizCode. All rights reserved.
            </div>
        </footer>
    );
}

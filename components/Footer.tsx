"use client";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = () => {
        if (email) setSubscribed(true);
    }

    return (
        <footer className="w-full bg-white border-t mt-12 py-12">
            <div className="container mx-auto px-4 md:px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-4">
                    <Link className="flex items-center gap-2 font-bold text-xl text-blue-600" href="/">
                        <span>&lt;/&gt;</span>
                        <span>VikizCode</span>
                    </Link>
                    <p className="text-sm text-gray-500">
                        Insights into 2026 Tech Trends: AI, Web Dev, Cloud, and Startups.
                    </p>
                    <div className="flex gap-4">
                        {/* Icons */}
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-blue-100 hover:text-blue-600 cursor-pointer">𝕏</div>
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-blue-100 hover:text-blue-600 cursor-pointer">in</div>
                    </div>
                </div>

                <div className="space-y-4 col-span-1 lg:col-span-2">
                    <h4 className="font-semibold">Stay Up-to-Date</h4>
                    <p className="text-sm text-gray-500">Subscribe for the latest tech trend analyses.</p>
                    <div className="flex gap-2 max-w-md">
                        {subscribed ? (
                            <div className="text-green-600 text-sm font-medium p-2 bg-green-50 rounded">Thanks for subscribing!</div>
                        ) : (
                            <>
                                <input
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                                    placeholder="Your email address"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button
                                    onClick={handleSubscribe}
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700"
                                >
                                    Subscribe
                                </button>
                            </>
                        )}
                    </div>
                </div>

                <div className="space-y-4">
                    <h4 className="font-semibold">Quick Links</h4>
                    <ul className="space-y-2 text-sm text-gray-500">
                        <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
                        <li><Link href="/category" className="hover:text-blue-600">Categories</Link></li>
                        <li><Link href="#" className="hover:text-blue-600">About Us</Link></li>
                        <li><Link href="#" className="hover:text-blue-600">Contact</Link></li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-4 md:px-6 mt-8 pt-8 border-t text-center text-xs text-gray-400">
                © 2026 VikizCode. All rights reserved.
            </div>
        </footer>
    );
}

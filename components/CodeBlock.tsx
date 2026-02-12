"use client";

import { useState } from "react";

export default function CodeBlock({ code, language }: { code: string; language?: string }) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative group my-6">
            {/* Language label */}
            {language && (
                <div className="absolute top-0 left-4 -translate-y-1/2 px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold rounded-full shadow-lg">
                    {language}
                </div>
            )}

            {/* Copy button */}
            <button
                onClick={copyToClipboard}
                className="absolute top-3 right-3 px-3 py-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg text-white text-sm font-medium transition-all opacity-0 group-hover:opacity-100 flex items-center gap-2"
            >
                {copied ? (
                    <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Copied!
                    </>
                ) : (
                    <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Copy
                    </>
                )}
            </button>

            {/* Code block */}
            <pre className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100 p-6 rounded-xl overflow-x-auto border border-slate-700 shadow-2xl">
                <code className="text-sm font-mono leading-relaxed">{code}</code>
            </pre>
        </div>
    );
}

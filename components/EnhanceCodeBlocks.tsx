"use client";

import { useEffect } from "react";

export default function EnhanceCodeBlocks() {
    useEffect(() => {
        // Find all pre elements and add copy buttons
        const preElements = document.querySelectorAll("article.blog-content pre");

        preElements.forEach((pre) => {
            // Skip if already enhanced
            if (pre.querySelector(".copy-button")) return;

            // Create copy button
            const button = document.createElement("button");
            button.className = "copy-button absolute top-3 right-3 px-3 py-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg text-white text-sm font-medium transition-all opacity-0 group-hover:opacity-100 flex items-center gap-2";
            button.innerHTML = `
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>Copy</span>
            `;

            // Add click handler
            button.addEventListener("click", async () => {
                const code = pre.querySelector("code")?.textContent || "";
                await navigator.clipboard.writeText(code);

                const span = button.querySelector("span");
                if (span) {
                    span.textContent = "Copied!";
                    setTimeout(() => {
                        span.textContent = "Copy";
                    }, 2000);
                }
            });

            // Make pre relative and add group class
            (pre as HTMLElement).style.position = "relative";
            pre.classList.add("group");

            // Append button
            pre.appendChild(button);
        });
    }, []);

    return null;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Get in touch with VikizCode — questions, collaboration ideas, or feedback on web development and tech content for engineering students.",
    openGraph: {
        title: "Contact VikizCode",
        description:
            "Get in touch with VikizCode — questions, collaboration ideas, or feedback on web development and tech content for engineering students.",
        url: "https://vikizcode.in/contact",
        type: "website",
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "Rohan Kumar | Portfolio",
  description: "Full Stack Developer Portfolio – Rohan Kumar. Skills in Python, JavaScript, React, Node.js, and more.",
  keywords: [
    "rohan kumar",
    "portfolio",
    "full stack developer",
    "react",
    "javascript",
    "python",
    "web developer",
    "new delhi",
  ] as Array<string>,
  authors: {
    name: "Rohan Kumar",
    url: "https://github.com/rohan-056",
  },
} as const;

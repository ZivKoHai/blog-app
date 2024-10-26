import "./_styles/globals.css";
import Header from "../components/ui/Header";
import Footer from "@/components/Footer";

import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Blog",
  description: "place where you can write your thoughts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="./favicon-blog-light.svg"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="./favicon-blog-dark.svg"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className={`main-container ${workSans.className}`}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

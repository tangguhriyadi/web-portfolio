import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "../providers/ThemeProvider";
import { headers } from "next/headers";

const outfit = Outfit({ subsets: ["latin"] });

export const generateMetadata = (): Metadata => {
  const host = headers().get("x-forwarded-host");

  return {
    metadataBase: new URL(`https://${host}`),

    title: "Muhammad Tangguh Riyadi | Software Engineer",
    description:
      "Professional Software Engineer, Expertise in NextJS, ReactJS, Typescript, NodeJS, Go",
    icons: {
      icon: ["/logo-tr.svg"],
    },
  };
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

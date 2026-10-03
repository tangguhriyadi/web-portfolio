import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "../providers/ThemeProvider";
import ogImage from "./opengraph-image.png";

const outfit = Outfit({ subsets: ["latin"] });

export const generateMetadata = (): Metadata => {
  const isLocal = process.env.ENV_IS_LOCAL;

  const url = isLocal
    ? "http://localhost:3000"
    : "https://tangguhriyadi.vercel.app";

  return {
    metadataBase: new URL(url),
    verification: {
      google: "E_xtQ4V5sDg532n5mbZYdHSmpWRjVXoBH99iHGnGt0M",
    },
    title: "Muhammad Tangguh Riyadi | Fullstack Web Developer",
    description:
      "Professional Software Engineer, Expertise in NextJS, ReactJS, Typescript, NodeJS, Go",
    icons: {
      icon: ["/logo-tr.svg"],
    },
    openGraph: {
      images: [
        {
          url: ogImage.src,
          width: ogImage.width,
          height: ogImage.height,
        },
      ],
    },
    twitter: {
      images: [
        {
          url: ogImage.src,
          width: ogImage.width,
          height: ogImage.height,
        },
      ],
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

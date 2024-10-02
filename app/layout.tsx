import "./globals.css";

import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import ThemeLocal from "@/components/ui/ThemeLocal";
import NextTopLoader from "nextjs-toploader";
import MainLayout from "@/components/navigation/main-layout";
import { site_metadata } from "@/config/site_metadata";
import { PHProvider } from "./providers";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: site_metadata.name,
    template: `%s - ${site_metadata.name}`,
  },
  description: site_metadata.description,
  keywords: ["Winter Arc"],
  authors: [
    {
      name: "WinterArc",
      url: site_metadata.url,
    },
  ],
  creator: "WinterArc",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site_metadata.url,
    title: site_metadata.name,
    description: site_metadata.description,
    siteName: site_metadata.name,
    images: [
      {
        url: site_metadata.ogImage,
        width: 1200,
        height: 630,
        alt: site_metadata.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site_metadata.name,
    description: site_metadata.description,
    images: [site_metadata.ogImage],
    creator: site_metadata.twitterHandle,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${site_metadata.url}/site.webmanifest`,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#000000"></meta>
        <meta
          data-rh="true"
          name="robots"
          content="index,follow,max-image-preview:large"
        />
      </head>
      <body
        id="main-div"
        className={cn(
          "min-h-screen overflow-hidden bg-background antialiased",
          fontSans.className
        )}
      >
        <NextUIProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <PHProvider>
              <NextTopLoader
                color="linear-gradient(to right, #fc466b, #3f5efb)"
                initialPosition={0.08}
                crawlSpeed={500}
                height={5}
                crawl={true}
                showSpinner={false}
                easing="ease"
                speed={500}
              />
              <MainLayout>{children}</MainLayout>
              <ThemeLocal />
            </PHProvider>
          </ThemeProvider>
        </NextUIProvider>
        <Toaster />
      </body>
    </html>
  );
}

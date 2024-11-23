import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import { Unbounded } from "next/font/google";

const unbounded = Unbounded({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Saturn Swapper - Download the Fortnite Skin Changer!",
  description: "Welcome to the heart of the gaming revolution! Download Saturn Swapper now and transform your Fortnite experience. Our cutting-edge skin changer opens the",
  keywords: "saturn swapper, saturn swapper download, saturn swapper fortnite, saturnswapper, fortnite skin swapper, fortnite skin changer, galaxy swapper, fortnite skinchanger, galaxy swapper v2, galaxyswapper, galaxie swapper",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover",
  robots: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  openGraph: {
    title: "Saturn Swapper - Download the Fortnite Skin Changer!",
    description: "Welcome to the heart of the gaming revolution! Download Saturn Swapper now and transform your Fortnite experience. Our cutting-edge skin changer opens the",
    type: "website",
    url: "https://www.saturnswapper.com",
    locale: "en_US",
    siteName: "Saturn Swapper - Download the Fortnite Skin Changer!",
    images: [
      {
        url: "https://www.saturnswapper.com/og_image.png",
        width: 1200,
        height: 630,
        alt: "Saturn Swapper",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saturn Swapper - Download the Fortnite Skin Changer!",
    description: "Welcome to the heart of the gaming revolution! Download Saturn Swapper now and transform your Fortnite experience. Our cutting-edge skin changer opens the",
    images: [
      {
        url: "https://www.saturnswapper.com/twitter-image.png",
        alt: "Saturn Swapper",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body
          className={`antialiased bg-background ${unbounded.className}`}
        >
          {children}
        </body>
      </html>
    </>
  );
}

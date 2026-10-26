import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import "./globals.css";
import "./image-sections.css";

const socialImage =
  "https://res.cloudinary.com/kcxmd95c/image/upload/f_jpg,q_auto,w_1200,h_630,c_fill,g_auto/v1793012341/alder-grove-schools/campus-exterior-greenery.jpg";

export const metadata: Metadata = {
  metadataBase: new URL("https://alder-grove-schools.vercel.app"),
  title: {
    default: "Alder Grove Schools | A School Website Concept",
    template: "%s | Alder Grove Schools"
  },
  description:
    "A fictional school website concept demonstrating thoughtful learning, community and student development.",
  applicationName: "Alder Grove Schools",
  openGraph: {
    type: "website",
    siteName: "Alder Grove Schools",
    locale: "en_US",
    title: "Alder Grove Schools | A School Website Concept",
    description:
      "Explore a fictional school website concept built around learning, curiosity and community.",
    url: "https://alder-grove-schools.vercel.app",
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "Illustrative school campus surrounded by landscaped greenery."
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Alder Grove Schools | A School Website Concept",
    description:
      "A fictional school website concept by TGG HUB.",
    images: [socialImage]
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false
    }
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f6f0"
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
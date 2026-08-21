import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Geist_Mono, Noto_Serif_KR } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const serifKr = Noto_Serif_KR({
  variable: "--font-serif-kr",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.PAGES_ORIGIN
  ? `${process.env.PAGES_ORIGIN}${process.env.PAGES_BASE_PATH ?? ""}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/favicon.svg",
  },
  title: {
    default: "마이미라운지 MY · ME LOUNGE | 상수·홍대 라운지 카페",
    template: "%s | MY · ME LOUNGE",
  },
  description: site.description,
  keywords: [
    "마이미라운지",
    "MY ME LOUNGE",
    "상수 카페",
    "홍대 카페",
    "라운지 카페",
    "디저트 카페",
    "쏠티 초코 라떼",
    "씨솔트크림 커피",
  ],
  authors: [{ name: site.nameKo }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: site.name,
    title: "마이미라운지 MY · ME LOUNGE",
    description: site.description,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: "마이미라운지 내부",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "마이미라운지 MY · ME LOUNGE",
    description: site.description,
    images: [site.ogImage],
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#2a211a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${display.variable} ${serifKr.variable} ${geistMono.variable} h-full`}
    >
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <style>{`:root{--font-pretendard:"Pretendard Variable",Pretendard,sans-serif;}`}</style>
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}

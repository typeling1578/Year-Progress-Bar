import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Figtree } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const poppins = Figtree({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Year Progress Bar",
    default: "Year Progress Bar",
  },
  description: "This site displays the progress of the year.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="apple-touch-icon" sizes="180x180" href="icons/apple-touch-icon.jpg" />
        <link rel="icon" type="image/webp" sizes="192x192" href="icons/icon-192x192.webp" />
        <link rel="icon" type="image/jpeg" sizes="32x32" href="icons/favicon-32x32.jpg" />
        <link rel="icon" type="image/jpeg" sizes="16x16" href="icons/favicon-16x16.jpg" />

        <meta property="og:title" content="Year Progress Bar" />
        <meta property="og:description" content="This site displays the progress of the year." />
        <meta property="og:image" content="https://year-progress-bar.pages.dev/icons/icon-144x144.jpg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@typeling1578" />
        <meta name="twitter:creator" content="@typeling1578" />
      </head>
      <body className={`${poppins.className} season5-theme`}>
        <NextTopLoader color="#175dee" showSpinner={false} />
        {children}
      </body>
    </html>
  );
}

import { GeistSans } from "geist/font/sans";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Efectos Website",
  description: "Efectos Macroplaza Oaxaca",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/FAVICON.ico" type="image/x-icon" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="bg-background text-foreground">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

export const metadata: Metadata = {
  title: "Summoria",
  description: "Transform PDFs into concise summaries using AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

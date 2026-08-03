import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clean TXT Viewer",
  description: "Read Markdown files beautifully and privately in your browser.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

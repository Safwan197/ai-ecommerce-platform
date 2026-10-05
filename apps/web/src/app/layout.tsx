import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Commerce Platform",
  description: "B2C + B2B e-commerce platform",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 p-8 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}

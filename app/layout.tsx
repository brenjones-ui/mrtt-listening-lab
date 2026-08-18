import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MRTT Listening Lab",
  description: "Ready-to-teach listening activities grounded in the MRTT audio repository.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

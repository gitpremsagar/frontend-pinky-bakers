import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Delicious Cakes, Chocolates & Birthday Decorations | Pinky Bakers",
  description:
    "A delightful selection of cakes, chocolates, and birthday decorations at Pinky Bakers. Perfect for any celebration, we offer high-quality products that will make your events memorable. Shop now for the best deals and fast delivery!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>{children}</body>
    </html>
  );
}

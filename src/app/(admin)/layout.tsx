import type { Metadata } from "next";

import TopNavigation from "@/app/components/homepage/header/top-navigation";

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Pinky Bakers' admin dashboard. Manage your products, orders, and customers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>
        {/* TODO: Create admin navigation */}
        <TopNavigation />
      </header>
      {children}
    </>
  );
}

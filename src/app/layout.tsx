import "./globals.css";
import { Suspense } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import AuthStatus from "@/components/auth-status";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Realtime Chat",
  description:
    "Realtime chat app build wit Next.js, Prisma, TailwindCss, Next-Auth, and Socket.io",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback="Loading...">
          <AuthStatus />
        </Suspense>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

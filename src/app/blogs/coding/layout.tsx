import type { Metadata } from "next";
import { Geist, Geist_Mono, Open_Sans } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Pratiyank",
  description: "Portfolio of Pratiyank",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} ${openSans.className} antialiased flex flex-col w-screen justify-center items-center`}
    >
      {children}
    </div>
  );
}

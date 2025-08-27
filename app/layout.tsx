import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import HideDevBadge from "./components/HideDevBadge";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
});

export const metadata: Metadata = {
  title: "T.A.S. FORCE Messeplaner",
  description: "Individueller Messeplan als PDF – erstellt mit KI.",
  icons: {
    icon: "/tas.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${workSans.variable} antialiased`}>
        <HideDevBadge />
        {children}
      </body>
    </html>
  );
}

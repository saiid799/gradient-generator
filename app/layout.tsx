import type { Metadata } from "next";
import { Alegreya_Sans, Proza_Libre } from "next/font/google";
import "./globals.css";

const alegreyaSans = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-alegreya-sans",
});

const prozaLibre = Proza_Libre({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-proza-libre",
});

export const metadata: Metadata = {
  title: "CSS Gradient Generator",
  description: "Create beautiful CSS gradients for your projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${alegreyaSans.variable} ${prozaLibre.variable}`}
    >
      <body className="font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}

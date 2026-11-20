import type { Metadata } from "next";
import { Anton, Geist_Mono, Inter, Mrs_Saint_Delafield, Playfair_Display } from "next/font/google";
import { MotionProvider } from "@/components/motion-provider";
import { profile } from "@/data/portfolio";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const signatureScript = Mrs_Saint_Delafield({
  variable: "--font-signature-script",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${profile.firstName} ${profile.lastName} | ${profile.role}`,
  description: profile.bio,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${playfair.variable} ${inter.variable} ${geistMono.variable} ${signatureScript.variable} antialiased`}
    >
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}

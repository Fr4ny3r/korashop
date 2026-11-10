import type { Metadata } from "next";
import { Anton } from "next/font/google";
import "./globals.css";


const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
});
 
export const metadata: Metadata = {
  title: "KAOS",
  description: "Clothes Shop",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en" 
      className={`${anton.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

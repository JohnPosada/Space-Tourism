import Navbar from "@/components/ui/Navbar";
import "./globals.css";
import { Bellefair, Barlow_Condensed } from "next/font/google";

const bellefair = Bellefair({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bellefair",
});

const barlowCondensed = Barlow_Condensed({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow-condensed",
});

export const metadata = {
  title: "Space tourism",
  description: "The best space tourism agency in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bellefair.variable} ${barlowCondensed.variable}`}
    >
      <body className="h-screen w-screen ">
        <>{children}</>
      </body>
    </html>
  );
}

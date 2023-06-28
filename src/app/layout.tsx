import "./globals.css";
import { Archivo } from "next/font/google";
import Navigator from "@/components/layout/Navigator";
import Footer from "@/components/layout/Footer";

import type { Metadata } from "next";

const archivo = Archivo({ weight: "variable", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://pdcolan.com"),
  title: "Paul Colandrea Portfolio",
  description: "Software Engineer",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  twitter: {
    title: "Paul Colandrea",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={archivo.className}>
        {/* <ThemeProvider> */}
        <div className="flex flex-col items-center justify-center min-h-screen text-black bg-background">
          <div className="flex flex-col h-full py-20 w-[90%] md:w-[40rem] mt-12 text-gray-600 dark:text-gray-300">
            <Navigator />
            {children}
            <Footer />
          </div>
        </div>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}

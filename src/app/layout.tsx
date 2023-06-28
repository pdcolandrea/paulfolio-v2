import Header from "@/components/layout/Header";
import { ThemeProvider } from "../context/theme-provider";
import "./globals.css";
import { Archivo } from "next/font/google";
import Navigator from "@/components/layout/Navigator";
import Footer from "@/components/layout/Footer";

const archivo = Archivo({ weight: "variable", subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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

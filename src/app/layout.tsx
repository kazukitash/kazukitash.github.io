import type { Metadata } from "next";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";

export const metadata: Metadata = {
  title: "Yukima",
  description: "Indie game developer in Japan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="w-full h-full">
      <body className="font-meiryo flex flex-col w-full h-full">
        <div className="flex-none">
          <Header />
        </div>
        <div className="grow">{children}</div>
        <div className="flex-none">
          <Footer />
        </div>
      </body>
    </html>
  );
}

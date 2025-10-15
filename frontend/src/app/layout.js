import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Encurtador de Links",
  description: "Gerador de links encurtados simples e rápido",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`bg-stone-100 ${roboto.className}`}>{children}</body>
    </html>
  );
}

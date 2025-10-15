import "./globals.css";

export const metadata = {
  title: "Encurtador de Links",
  description: "Gerador de links encurtados simples e rápido",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

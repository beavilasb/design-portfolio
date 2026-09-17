import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bia Rodrigues — Product Design Manager",
  description: "Portfolio pessoal de Bia Rodrigues, Product Design Manager.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

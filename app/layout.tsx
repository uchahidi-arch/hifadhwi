import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HIFADHWI Comores - Protection des femmes et des enfants",
  description: "ONG HIFADHWI - Lutte contre la violence faite aux femmes et aux enfants aux Comores. Accompagnement juridique, sensibilisation et plaidoyer.",
  keywords: "HIFADHWI, Comores, violence femmes, protection enfance, ONG, VBG",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

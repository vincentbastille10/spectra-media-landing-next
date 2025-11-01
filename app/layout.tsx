export const metadata = {
  title: "Spectra Media AI",
  description: "Créez votre bot métier Betty Bot",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className="text-primary flex flex-col justify-between min-h-screen mx-auto">{children}</body>
    </html>
  );
}

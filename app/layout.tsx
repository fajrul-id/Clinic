import Script from "next/script";
import "./globals.css";
import Head from "./head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <head>
        <Head/>
      </head>
      <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-FRXQZ5FQ3T"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-FRXQZ5FQ3T');
        `}
          </Script>
      <body className="text-primary flex flex-col justify-between min-h-screen mx-auto">{children}</body>
    </html>
  );
}

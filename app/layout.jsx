import Head from 'next/head';
import "./globals.css";

export const metadata = {
  title: "Sachin Patel",
  description: "Full Stack Developer Portfolio",
  icons: {
    icon: "data:,", // This creates an empty favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* this Head and meta tages will help to make a responsive web */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}

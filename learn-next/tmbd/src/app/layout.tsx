import "./styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Movie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=MuseoModerno:wght@400;500&family=Noto+Sans+KR:wght@400;700&family=Oxygen:wght@400;700&family=Sanchez&family=Sedgwick+Ave+Display&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

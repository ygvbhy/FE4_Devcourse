import "./globals.css";
export const metadata = {
  title: "My App",
  description: "My App Description",
};

import Link from "next/link";
import Tamplate from "./tamplate";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
        <Tamplate>
          <input type="text" placeholder="Search" className="border-2" />
        </Tamplate>
        {children}
      </body>
    </html>
  );
}

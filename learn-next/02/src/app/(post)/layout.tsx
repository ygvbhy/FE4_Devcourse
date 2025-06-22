export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>Post Header</header>
      {children}
      <footer>Post Footer</footer>
    </>
  );
}

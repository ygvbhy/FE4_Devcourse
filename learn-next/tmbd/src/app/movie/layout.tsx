import Header from "../../components/commons/Header";
import Footer from "../../components/commons/Footer";

export default function MovieLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

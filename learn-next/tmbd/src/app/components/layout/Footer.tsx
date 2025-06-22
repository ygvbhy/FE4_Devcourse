"use client";

import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const isList = pathname.includes("/list");

  if (isList) return null;

  return (
    <footer className="footer">
      <p>copyright @ sucoding vuejs course</p>
    </footer>
  );
};
export default Footer;

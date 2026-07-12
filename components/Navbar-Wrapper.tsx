"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar/Navbar"; // Adjust this path to your actual Navbar component

export default function NavbarWrapper() {
  const pathname = usePathname();

  // Replace '/login' with your exact static page path
  if (pathname === "/nfw-privacy-policy") {
    return null;
  }

  return <Navbar />;
}

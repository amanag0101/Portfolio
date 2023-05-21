"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (url: string) => {
    return pathname === url ? true : false;
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <Link className={isActive("/") ? "active" : ""} href="/">
          Home
        </Link>
        <Link href="#">Projects</Link>
        <Link href="#">Experience</Link>
        <Link href="#">Tech Stack</Link>
      </div>
    </div>
  );
}
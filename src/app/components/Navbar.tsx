"use client";

import { usePathname, useRouter } from "next/navigation";
import styles from "./css/navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  function handleClick(url: string) {
    router.push(url);
  }

  function isActive(url: string): string {
    return pathname === url ? "active" : "";
  }

  return (
    <div className={styles.navbar}>
      <p className={styles[isActive("/")]} onClick={() => handleClick("/")}></p>
      {/* <p
          className={styles[isActive("/projects")]}
          onClick={() => handleClick("/projects")}
        ></p> */}
      <p
        className={styles[isActive("/techstack")]}
        onClick={() => handleClick("/techstack")}
      ></p>
    </div>
  );
}

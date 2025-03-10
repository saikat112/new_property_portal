"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./NavBar.module.css"; // Import CSS module

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          MyProperty
        </Link>

        {/* Desktop Menu */}
        <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
          <Link href="/" className={styles.navItem} onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/properties" className={styles.navItem} onClick={() => setIsOpen(false)}>Properties</Link>
          <Link href="/about" className={styles.navItem} onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/contact" className={styles.navItem} onClick={() => setIsOpen(false)}>Contact</Link>
        </div>

        {/* Hamburger Menu Button */}
        <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>
      </div>
    </nav>
  );
}

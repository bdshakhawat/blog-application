// import React from 'react';
// 'use client'
// components/Header.js
import Link from 'next/link';
import styles from './Header.module.css';
import { Container } from 'postcss';

function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
         Simple Blog
      </Link>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>

          <li>
            <Link href="/about">
              About
            </Link>
          </li>
          <li>
            <Link href="/single-blog">
              Single-blog
            </Link>
          </li>
          <li>
            <Link href="/blog">
              Blog
            </Link>
          </li>


          <li>
            <Link href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

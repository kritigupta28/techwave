import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <span className="text-primary">Techwave</span> <span className="text-secondary">Elecso</span>
        </Link>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/" className={styles.link}>Home</Link>
          </li>
          <li>
            <Link href="/about" className={styles.link}>About Us</Link>
          </li>
          <li>
            <Link href="/contact" className={styles.link}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

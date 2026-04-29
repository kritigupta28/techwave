import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>
            <span className="text-primary">Techwave</span> <span className="text-secondary">Elecso</span>
          </h3>
          <p className={styles.footerText}>
            Powering Your Business, Connecting Your Future.
          </p>
        </div>
        <div className={styles.footerSection}>
          <h4 className={styles.footerSubTitle}>Quick Links</h4>
          <ul className={styles.footerLinks}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4 className={styles.footerSubTitle}>Contact Info</h4>
          <ul className={styles.footerLinks}>
            <li>123 Techwave Ave, NY 10001</li>
            <li>info@techwave-elecso.com</li>
            <li>+1 (555) 123-4567</li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className="container text-center">
          <p>&copy; {new Date().getFullYear()} Techwave Elecso. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

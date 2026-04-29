import Link from 'next/link';
import styles from './Button.module.css';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ 
  children, 
  href, 
  variant = 'primary', 
  className = '', 
  onClick,
  type = 'button'
}: ButtonProps) {
  const btnClass = `${styles.btn} ${styles[`btn-${variant}`]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={btnClass}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
}

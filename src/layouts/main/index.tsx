import { type ReactNode } from 'react';

import styles from './main.module.css';

import Header from '../../components/header';
import Footer from '../../components/footer';

interface LayoutMainProps {
  children: ReactNode;
}

export default function LayoutMain({ children }: LayoutMainProps) {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}

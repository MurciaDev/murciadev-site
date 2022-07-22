import { type ReactNode } from 'react';

import styles from './container.module.css';

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <div className={styles.wrapper}>{children}</div>;
}

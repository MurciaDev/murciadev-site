import { type ReactNode } from 'react';
import cx from 'classnames';

import styles from './container.module.css';

interface ContainerProps {
  children: ReactNode;
  design?: 'normal' | 'narrow';
}

export default function Container({
  children,
  design = 'normal',
}: ContainerProps) {
  return (
    <div className={cx(styles.container, styles[`container--${design}`])}>
      {children}
    </div>
  );
}

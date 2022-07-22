import {
  createElement,
  HTMLAttributeAnchorTarget,
  HTMLAttributeReferrerPolicy,
} from 'react';
import cx from 'classnames';

import styles from './button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  design?: 'primary' | 'secondary';
  as: 'button' | 'a';
  href?: string;
  rel?: string;
  target?: HTMLAttributeAnchorTarget;
  onClick?: () => void;
}

export default function Button({
  children,
  as = 'button',
  design = 'primary',
  onClick,
  ...props
}: ButtonProps) {
  const className = cx(
    styles.button,
    design === 'secondary' && styles['button--secondary']
  );

  return createElement(as, { ...props, className, onClick }, [children]);
}

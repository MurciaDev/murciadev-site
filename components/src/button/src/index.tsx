import cx from 'classnames';

import styles from './button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  design?: 'primary' | 'secondary';
  onClick?: () => void;
}

export default function Button({
  children,
  design = 'primary',
  onClick,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cx(
        styles.button,
        design === 'secondary' && styles['button--secondary']
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

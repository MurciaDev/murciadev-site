import { type ReactElement } from 'react';

import styles from './list.module.css';

interface ListProps {
  items: ReactElement[];
}

export default function List({ items }: ListProps) {
  return (
    <ul className={styles.wrapper}>
      {items.map((item) => (
        <li key={item.key} className={styles.item}>
          {item}
        </li>
      ))}
    </ul>
  );
}

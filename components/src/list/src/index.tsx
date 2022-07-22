import styles from './list.module.css';

interface ListProps {
  items: React.ReactElement[];
}

export default function List({ items }: ListProps) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.key} className={styles.item}>
          {item}
        </li>
      ))}
    </ul>
  );
}

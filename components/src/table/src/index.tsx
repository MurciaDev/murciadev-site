import styles from './table.module.css';

interface TableProps {
  columns: {
    label: string;
    minWidth?: string;
    align?: 'left' | 'right' | 'center';
  }[];
  rows: {
    [key: string]: any;
  }[];
}

export default function Table({ columns, rows }: TableProps) {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map(({ label, align }) => (
              <th key={label} align={align}>
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, indexRow) => (
            <tr key={indexRow}>
              {Object.values(row).map((value, index) => (
                <td key={index} width={columns[index]?.minWidth}>
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import { Table } from '@murciadev/components';

import useTechHubTable, { type Company } from './hooks/useTechHubTable';
import styles from './tech-hub-table.module.css';

interface TechHubTableProps {
  category: string;
  companies: Company[];
}

export default function TechHubTable({
  category,
  companies,
}: TechHubTableProps) {
  const { tableRows, tableColumns } = useTechHubTable({ companies });

  return (
    <div className={styles.table}>
      <h2>{category}</h2>
      <Table columns={tableColumns} rows={tableRows} />
    </div>
  );
}

export { type Company };

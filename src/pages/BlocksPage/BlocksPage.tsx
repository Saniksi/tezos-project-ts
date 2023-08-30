import { Breadcrumb } from '../../components/Breadcrumb';
import { Table } from '../../components/Table';
import { Title } from '../../components/Title';

import styles from './BllocksPage.module.scss';

export function BlocksPage() {
  return (
    <div className="container">
      <Breadcrumb />
      <div className={styles.title}>
        <Title text="Blocks" />
      </div>
      <div className={styles.table}>
        <Table />
      </div>
    </div>
  );
}

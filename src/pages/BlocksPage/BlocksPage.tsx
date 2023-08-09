import { Breadcrumb } from '../../components/Breadcrumb';
import { Table } from '../../components/Table';
import { Title } from '../../components/Title';

import styles from './BllocksPage.module.scss';

export function BlocksPage() {
  return (
    <div className="container">
      <div className={styles.breadcrumbs}>
        <Breadcrumb text="Home" />
        <span
          className={`icons-social-arrow ${styles['icons-social-arrow']}`}
        ></span>
        <Breadcrumb text="Blocks" />
      </div>
      <div className={styles.title}>
        <Title text="Blocks" />
      </div>
      <div className={styles.table}>
        <Table />
      </div>
    </div>
  );
}

import { TableRowProps } from '../types/TableRowProps';

import styles from './TableRow.module.scss';

const TableRow = (props: TableRowProps) => {
  const {
    blockID,
    created,
    bakerImg,
    baker,
    priority,
    operations,
    volume,
    free,
    endorsements,
    active,
  } = props;

  return (
    <tr
      className={`${
        active ? `${styles.row} + ${styles.active}` : `${styles.row}`
      }`}
    >
      <td className={styles.data}>{blockID}</td>
      <td className={styles.data}>{created}</td>
      <td className={styles.data}>
        <img src={bakerImg} alt="icon" />
        {baker}
      </td>
      <td className={styles.data}>{priority}</td>
      <td className={styles.data}>{operations}</td>
      <td className={styles.data}>{volume} </td>
      <td className={styles.data}>{free}</td>
      <td className={styles.data}>{endorsements}</td>
    </tr>
  );
};

export { TableRow };

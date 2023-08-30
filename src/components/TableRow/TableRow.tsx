import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ThemeContext } from '../../context/ThemeContext';
import { TableRowProps } from '../types/TableRowProps';

import styles from './TableRow.module.scss';

const TableRow = (props: TableRowProps) => {
  const {
    blockId,
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

  const { theme } = useContext(ThemeContext);

  return (
    <tr className={styles.row}>
      <td className={styles.data}>
        <Link to={`${blockId}`}>{blockId}</Link>
      </td>

      <td className={`${styles.data} ${styles[theme]}`}>{created}</td>
      <td className={styles.data}>
        <img className={styles.image} src={bakerImg} alt="icon" />
        <Link to={`${blockId}`} className={styles.baker} title={baker}>
          {baker}
        </Link>
      </td>
      <td className={`${styles.data} ${styles[theme]}`}>{priority}</td>
      <td className={`${styles.data} ${styles[theme]}`}>{operations}</td>
      <td className={`${styles.data} ${styles[theme]}`}>{volume} </td>
      <td className={`${styles.data} ${styles[theme]}`}>{free}</td>
      <td className={`${styles.data} ${styles[theme]}`}>{endorsements}</td>
    </tr>
  );
};

export { TableRow };

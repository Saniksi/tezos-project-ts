import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { ThemeContext } from '../../context/ThemeContext';
import { TableRowProps } from '../types/TableRowProps';

import styles from './TableRow.module.scss';
import { getBlocks } from '../../api';

const TableRow = (props: TableRowProps) => {
  useEffect(() => {
    getBlocks();
  }, []);
  
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

  const { theme } = useContext(ThemeContext);

  return (
    <tr
      className={`${
        active ? `${styles.row} + ${styles.active}` : `${styles.row}`
      }`}
    >
      <td className={styles.data}>
        <Link to="block">{blockID}</Link>
      </td>

      <td className={`${styles.data} ${styles[theme]}`}>{created}</td>
      <td className={styles.data}>
        <img src={bakerImg} alt="icon" />
        {baker}
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

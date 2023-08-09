import { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';
import { TableRow } from '../TableRow';

import styles from './Table.module.scss';
import '../../scss/font-icons.scss';

const data = [
  {
    blockID: '1,7771,966',
    created: '13.10.2021 02 : 10 : 52',
    bakerImg: '../../img/icons/coin-icon.svg',
    baker: 'Coinbase',
    priority: 0,
    operations: 85,
    volume: '169.490682 ꜩ',
    free: '0.072267 ꜩ',
    endorsements: 70,
    id: 1,
    active: false,
  },
  {
    blockID: '1,7771,966',
    created: '13.10.2021 02 : 10 : 52',
    bakerImg: '../../img/icons/coin-icon.svg',
    baker: 'Coin',
    priority: 0,
    operations: 85,
    volume: '169.490682 ꜩ',
    free: '0.072267 ꜩ',
    endorsements: 70,
    id: 2,
    active: true,
  },
  {
    blockID: '1,7771,966',
    created: '13.10.2021 02 : 10 : 52',
    bakerImg: '../../img/icons/coin-icon.svg',
    baker: 'C',
    priority: 0,
    operations: 85,
    volume: '169.490682 ꜩ',
    free: '0.072267 ꜩ',
    endorsements: 70,
    id: 3,
    active: false,
  },
];

const tableHeaderData = [
  { text: 'Block ID', dropdown: true },
  { text: 'Created', dropdown: true },
  { text: 'Baker', dropdown: true },
  { text: 'Priority', dropdown: false },
  { text: '# of operations', dropdown: false },
  { text: 'Volume', dropdown: false },
  { text: 'Free', dropdown: false },
  { text: '# of endorsements', dropdown: false },
];

const elements = data.map((item) => {
  const { id, ...itemProps } = item;

  return <TableRow key={id} {...itemProps} />;
});

const Table = () => {
  const { theme } = useContext(ThemeContext);

  const tableHead = tableHeaderData.map(({ text, dropdown }) => {
    return (
      <th className={`${styles.header} ${styles[theme]}`} key={text}>
        {text}
        {dropdown ? (
          <span
            className={`icons-social-triangle ${styles['icons-social-triangle']}`}
          ></span>
        ) : (
          ''
        )}
      </th>
    );
  });

  return (
    <div className={`block-${theme} ${styles.wrapper}`}>
      <div className={`${styles.inner} ${styles[theme]}`}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.row}>{tableHead}</tr>
          </thead>
          <tbody>{elements}</tbody>
        </table>
      </div>
      <div className={`${styles.control} ${styles[theme]}`}>
        <div className={styles.quantity}>
          Rows pen page:
          <span>10</span>
          <span
            className={`icons-social-triangle ${styles['icons-social-triangle']}`}
          ></span>
        </div>
        <div className={styles.navigation}>
          <span
            className={`icons-social-arrow ${styles['icons-social-arrow']}`}
          ></span>
          <span>1</span>
          of
          <span>27</span>
          <span
            className={`icons-social-arrow ${styles['icons-social-arrow']}`}
          ></span>
        </div>
      </div>
    </div>
  );
};

export { Table };

import { TableRow } from '../TableRow';

import styles from './Table.module.scss';
import '../../scss/font-icons.scss'

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

const tableHeader = tableHeaderData.map(({ text, dropdown }) => {
  return (
    <th className={styles.header} key={text}>
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

const elements = data.map((item) => {
  const { id, ...itemProps } = item;

  return <TableRow key={id} {...itemProps} />;
});

let prevPageX: number;
let currentPageX;
let positionDiff;

const dragStart = (e: React.MouseEvent<HTMLDivElement>) => {
  prevPageX = e.pageX;
};

const dragging = (e: React.MouseEvent<HTMLDivElement>) => {
  currentPageX = e.pageX;
  positionDiff = currentPageX - prevPageX;
  console.log(positionDiff);
};

const dragEnd = (e: React.MouseEvent) => {};

const Table = () => {
  return (
    <div className={`block-border ${styles.wrapper}`}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.row}>{tableHeader}</tr>
        </thead>
        <tbody>{elements}</tbody>
      </table>
      <div
        className={styles.slider}
        onMouseDown={dragStart}
        onMouseMove={dragging}
      ></div>
      <div className={styles.control}>
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

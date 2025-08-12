import type { FC } from 'react';
import styles from './Header.module.scss';
import clsx from 'clsx';

const Header: FC = () => {
  return (
    <header className={styles['header']}>
      <div className={clsx(styles['header__inner'], styles['container'])}>
        <p>ghbdtghbdtghbdtghbdtghbdtghghbdtghbdtghbdtghbdtbdtghbdtghbdt</p>
        <p>ghbdtghbdtghbdtghbdtghbdtghbdtghbdt</p>
      </div>
    </header>
  );
};

export default Header;

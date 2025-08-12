import { useState, type FC } from 'react';
import styles from './Header.module.scss';
import clsx from 'clsx';
import Logo from '@/components/Logo/Logo';
import type { MenuItem } from './Header.types';

const Header: FC = () => {
  const [activeMenu, setActiveMenu] = useState<number>(1);

  const menuItems: MenuItem[] = [
    {
      label: 'Home',
      href: '/',
      id: 1,
    },
    {
      label: 'Movies & Shows',
      href: '/movies',
      id: 2,
    },
    {
      label: 'Support',
      href: '/support',
      id: 3,
    },
    {
      label: 'Subscriptions',
      href: '/subscriptions',
      id: 4,
    },
  ];

  console.log(activeMenu);

  return (
    <header className={styles['header']}>
      <div className={clsx(styles['header__inner'], styles['container'])}>
        <Logo loading="eager" />
        <nav className={styles['header__menu']}>
          <ul className={styles['header__menu-list']}>
            {menuItems.map((item) => (
              <li
                onClick={() => setActiveMenu(item.id)}
                className={styles['header__menu-item']}
                key={item.id}
              >
                <a
                  className={clsx(
                    styles['header__menu-link'],
                    item.id === activeMenu && styles['is-active'],
                  )}
                  // href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

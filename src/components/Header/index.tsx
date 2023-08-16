import Link from 'next/link';
import styles from './header.module.css';

const Header = () => {
  interface menuItem {
    name: string;
    link: string;
  }

  const menu: menuItem[] = [
    { name: 'project', link: '/' },
    { name: 'Lesson', link: '/lesson' },
    { name: 'About', link: '/about' },
  ];

  return (
    <header className="container flex justify-between">
      {menu.map((item: menuItem) => (
        <Link href={item.link}>
          <u>
            <h3 className={`uppercase ${styles.menu_item_styles}`}>{item.name}</h3>
          </u>
        </Link>
      ))}
    </header>
  );
};

export { Header };

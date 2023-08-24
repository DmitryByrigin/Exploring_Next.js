'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './header.module.css';

interface MenuItem {
  name: string;
  link: string;
}

interface NavigationProps {
  menu: MenuItem[];
}

function Navigation({ menu }: NavigationProps) {
  //const [activeItem, setActiveItem] = useState('');
  const pathname = usePathname();

  return (
    <article className="flex justify-between">
      {menu.map((item: MenuItem) => (
        <Link href={item.link} key={item.name}>
          <h3
            className={`uppercase ${
              item.link === pathname
                ? `${styles.menu_item_styles_active} ${styles.menu_item_styles}`
                : `${styles.menu_item_styles}`
            }`}>
            {item.name}
          </h3>
        </Link>
      ))}
    </article>
  );
}

export default Navigation;

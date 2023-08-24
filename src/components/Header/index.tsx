import Navigation from './Navigation';

const menu = [
  { name: 'project', link: '/' },
  { name: 'Lesson', link: '/lesson' },
  { name: 'About', link: '/about' },
];

const Header = () => {
  return (
    <header className="container">
      <Navigation menu={menu} />
    </header>
  );
};

export { Header };

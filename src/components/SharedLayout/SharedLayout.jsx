import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Link, Nav } from './SharedLayout.styled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

export const SharedLayout = () => {
  return (
    <>
      <header>
        <Nav>
          {navItems.map(({ href, text }) => (
            <Link key={href} to={href}>
              {text}
            </Link>
          ))}
        </Nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

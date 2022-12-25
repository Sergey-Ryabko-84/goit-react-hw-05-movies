import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

export const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          {navItems.map(({ href, text }) => (
            <NavLink key={href} to={href}>
              {text}
            </NavLink>
          ))}
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

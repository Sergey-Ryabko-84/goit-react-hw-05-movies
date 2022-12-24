import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
// import PropTypes from 'prop-types';

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
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

// SharedLayout .propTypes = {};

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// export const LayoutWrapper = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-gap: 4px;
// `;

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  gap: 16px;
  padding: 16px;
  background-color: #2b405520;
  box-shadow: #2b4055b0 0px 0px 8px;
  z-index: 2;
`;

export const Link = styled(NavLink)`
  padding: 8px 12px;
  text-decoration: none;
  font-weight: 500;
  color: #2b4055b0;
  text-shadow: 0 0 1px #2b4055;
  border-radius: 4px;

  &.active {
    color: #fff;
    background-color: #2b4055b0;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    font-weight: 700;
    text-shadow: 0 0 16px #2b4055;
  }
`;

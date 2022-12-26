import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeWrapper = styled.main`
  padding: 12px 0 150px 12px;
`;

export const Title = styled.h1`
  margin-bottom: 24px;
  color: #2b4055d0;
`;

export const ListLink = styled(Link)`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding-right: 280px;
  margin: 8px 0;
  text-decoration: none;
  color: #2b4055;
  transition: text-shadow 350ms;
  img {
    position: absolute;
    left: 300px;
    display: inline-block;
    opacity: 0;
    transition: opacity 250ms 100ms;
  }

  :hover,
  :focus-visible {
    font-weight: 500;
    text-shadow: 0 0 4px #2b405540;
    img {
      opacity: 1;
    }
  }
`;

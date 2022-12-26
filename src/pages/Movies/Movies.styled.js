import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MoviesWrapper = styled.main`
  padding: 12px 0 150px 12px;
`;

export const Form = styled.form`
  position: relative;
  z-index: 2;
  padding: 0  0 24px 16px;
`;

export const Input = styled.input`
  width: 240px;
  height: 28px;
  border-radius: 4px;
  border: 1px solid #2b405540;
  outline: none;
  :focus-visible {
    box-shadow: #2b4055b0 0px 0px 5px;
  }
`;

export const Button = styled.button`
  position: absolute;
  left: 226px;
  height: 28px;
  color: #2b4055b0;
  background-color: #ffffff00;
  border-radius: 0 4px 4px 0;
  border: none;
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

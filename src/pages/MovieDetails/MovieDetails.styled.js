import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieMain = styled.main`
  padding: 12px;
  color: #2b4055d0;
`;

export const BackdropImg = styled.div`
  background-image: url(${props => props.backdrop});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const BackdropWrapper = styled.div`
  background-image: radial-gradient(at center, #ffffff60, #ffffff 90%);
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  padding: 8px;
  margin-bottom: 12px;
  text-decoration: none;
  color: #2b4055;
  font-weight: 500;
  border-radius: 4px;
  transition: color 250ms, background-color 250ms, text-shadow 250ms;

  :hover,
  :focus-visible {
    color: #fff;
    background-color: #2b4055b0;
    box-shadow: #2b4055d0 0px 0px 4px;
  }
`;

export const MovieWrapper = styled.div`
  display: flex;
  gap: 12px;
  width: 800px;  
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 800px;
  padding: 12px;
  border-radius: 12px;
  background-image: radial-gradient(at top, #ffffffb0 70%, #ffffff00 95%);

  p {
    font-weight: 500;
  }
`;

export const AddInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px;

  li {
    padding: 2px;
  }

  a {
    text-decoration: none;
    color: #2b4055d0;
    font-weight: 500;

    :hover,
    :focus-visible {
      text-shadow: #2b4055d0 0px 0px 4px;
    }
  }
`;
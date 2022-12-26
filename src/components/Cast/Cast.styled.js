import styled from 'styled-components';

export const CastWrapper = styled.div`
  padding: 12px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  list-style: none;
`;

export const ListItem = styled.li`
  width: 120px;
  height: 236px;
  display: flex;
  flex-direction: column;
  text-align: center;

  img {
    object-fit: cover;
  }
`;

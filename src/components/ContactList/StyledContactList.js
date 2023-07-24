import styled from 'styled-components';

export const StyledList = styled.ul`
  background-color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 1rem 1rem 1rem rgb(65, 64, 64, 0.5),
    -1rem -1rem 1rem rgb(82, 81, 81, 0.5);
`;

export const StyledItem = styled.li`
  background-color: rgba(245, 159, 179, 0.2);
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledContact = styled.div`
  margin-right: 30px;
`;

export const StyledName = styled.span`
  margin-right: 1em;
`;

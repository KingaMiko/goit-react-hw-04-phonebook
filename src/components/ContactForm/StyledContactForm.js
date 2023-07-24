import styled from 'styled-components';

export const StyledForm = styled.form`
  background-color: white;
  display: flex;
  width: 300px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 1rem 1rem 1rem rgb(65, 64, 64, 0.5),
    -1rem -1rem 1rem rgb(82, 81, 81, 0.5);
`;

export const StyledLabel = styled.label`
  margin-bottom: 10px;
  color: black;
  font-size: 15px;

  &:last-child {
    margin-bottom: 0px;
  }
`;

export const StyledInputName = styled.input`
  margin-left: 25px;
`;

export const StyledInputNumber = styled.input`
  margin-left: 10px;
`;

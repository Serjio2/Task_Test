import styled from "styled-components";

export const TaskFormStyled = styled.form`

  display: flex;
  gap: 4px;


input {
  flex-grow: 1;
  padding: 8px;
  font: inherit;
}

input:focus {
  outline-color: #1976d2;
}
`;
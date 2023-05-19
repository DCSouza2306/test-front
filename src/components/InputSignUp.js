import styled from "styled-components";

export function InputSignUp({ children }) {
 return <InputSignUpDiv>{children}</InputSignUpDiv>;
}

const InputSignUpDiv = styled.div`
 display: flex;
 flex-direction: column;
 label {
  margin-bottom: 1rem;
 }
 input {
  width: 452px;
  height: 32px;
  border: 1px solid #777777;
  border-radius: 8px;
  font-size: 22px;
 }
`;

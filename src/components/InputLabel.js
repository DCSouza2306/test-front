import styled from "styled-components";

export function InputLabel({ children, height }) {
 return <InputLabelDiv height={height}>{children}</InputLabelDiv>;
}

const InputLabelDiv = styled.div`
 display: flex;
 flex-direction: column;
 margin-top: 1.4rem;
 label {
  margin-bottom: 1rem;
  font-size: 16px;
 }
 input, textarea {
    font-family: "Roboto", sans-serif;
  height: ${props => props.height};
  border: 1px solid #777777;
  border-radius: 8px;
  font-size: 18px;
 }

 textarea:focus,
 input:focus{
  box-shadow: 0 0 0 0;
  border: 1px solid #777777;
  outline: 0;
 }
`;

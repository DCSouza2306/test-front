import styled from "styled-components";

export function Button({ children, color, background, width, transform, border,disabled, onClick }) {
 return (
  <ButtonStyle
   color={color}
   background={background}
   width={width}
   transform={transform}
   border={border}
   disabled={disabled}
   onClick={onClick}
  >
   {children}
  </ButtonStyle>
 );
}

const ButtonStyle = styled.button`
 margin-top: 1rem;
 width: ${(props) => props.width};
 color: ${(props) => props.color};
 text-transform: ${(props) => props.transform};
 background-color: ${(props) => props.background};
 height: 32px;
 font-size: 16px;
 border: 1px solid ${props => props.border};
 border-radius: 8px;
 align-self: flex-end;
 font-weight: 700;
 cursor: pointer;
 :disabled{
    background-color: #777777;
    cursor: initial;
 }
`;

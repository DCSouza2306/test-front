import styled from "styled-components";

export function Modal({ isOpen, children, width }) {
 if (isOpen) {
  return (
   <Background>
    <ModalDiv width={width} >{children}</ModalDiv>;
   </Background>
  );
 }
}
const Background = styled.section`
 background-color: rgba(204, 204, 204, 0.8);
 z-index: 1000;
 position: absolute;
 width: 100vw;
 height: 100%;
`;

const ModalDiv = styled.div`
 border-radius: 16px;
 border: 1px solid #cccccc;
 position: fixed;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 padding: 1.5rem;
 display: flex;
 flex-direction: column;
 background-color: #ffffff;
width: ${props => props.width};
 h2 {
  font-weight: 700;
 }
`;

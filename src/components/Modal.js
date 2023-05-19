import styled from "styled-components";

export function Modal({ isOpen, children }) {
 if (isOpen) {
  return (
    <>
    <Background/>
     <ModalDiv>{children}</ModalDiv>;

    </>

  );
 }
}
const Background = styled.section`
background-color: rgba(204,204,204, 0.8);
z-index: 1000;
width: 100vw;
height: 100vh;
`

const ModalDiv = styled.div`
 font-family: "Roboto", sans-serif;
 border-radius: 16px;
 border: 1px solid #cccccc;
 position: fixed;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 padding: 1.5rem;
 display: flex;
 flex-direction: column;
 background-color: #FFFFFF;
 h2 {
  font-weight: 700;
 }
 textarea:focus,
 input:focus,
 select:focus {
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
 }
`;

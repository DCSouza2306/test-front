import { Modal } from "../../components/Modal";
import styled from "styled-components";
import { InputSignUp } from "../../components/InputSignUp";
import { Button } from "../../components/ButtonModal";
import { Title } from "../../components/TitleModal";

export function SignUp() {
 return (
  <SignUpSec>
   <Modal isOpen={true}>
    <Title>Welcome to CodeLeap network!</Title>
    <InputSignUp>
     <label>Please enter your username</label>
     <input></input>
    </InputSignUp>
    <Button 
    color={"#FFFFFF"}
    width={"111px"}
    transform={"uppercase"}
    background={"#7695EC"}
    border={"#FFFFFF"}
    >Enter</Button>
   </Modal>
  </SignUpSec>
 );
}

const SignUpSec = styled.section`
`;

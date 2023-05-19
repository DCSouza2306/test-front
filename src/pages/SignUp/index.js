import { Modal } from "../../components/Modal";
import styled from "styled-components";
import { InputLabel } from "../../components/InputLabel";
import { Button } from "../../components/Button";
import { Title } from "../../components/TitleModal";

export function SignUp() {
 return (
  <SignUpSec>
   <Modal isOpen={true}>
    <Title>Welcome to CodeLeap network!</Title>
    <InputLabel height={"32px"}>
     <label htmlFor="User" >Please enter your username</label>
     <input id="User"/>
    </InputLabel>
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

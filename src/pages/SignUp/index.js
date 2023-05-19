import { Modal } from "../../components/Modal";
import styled from "styled-components";
import { InputLabel } from "../../components/InputLabel";
import { Button } from "../../components/Button";
import { Title } from "../../components/TitleModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SignUp() {
    const [name, setName] = useState("");
    const navigate = useNavigate()

    function submitUser(){
       localStorage.setItem("user",name);
       navigate("/main");
    }
 return (
  <SignUpSec>
   <Modal isOpen={true}>
    <Title>Welcome to CodeLeap network!</Title>
    <InputLabel height={"32px"}>
     <label htmlFor="User" >Please enter your username</label>
     <input id="User" value={name} onChange={(e) => setName(e.target.value)}/>
    </InputLabel>
    <Button 
    color={"#FFFFFF"}
    width={"111px"}
    transform={"uppercase"}
    background={"#7695EC"}
    border={"#FFFFFF"}
    disabled={name.length === 0}
    onClick={() => submitUser()}
    >Enter</Button>
   </Modal>
  </SignUpSec>
 );
}

const SignUpSec = styled.section`
`;

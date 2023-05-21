import { Modal } from "../../components/Modal";
import styled from "styled-components";
import { InputLabel } from "../../components/InputLabel";
import { Button } from "../../components/Button";
import { Title } from "../../components/TitleModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser, setPost } from "../../actions/actions";
import { useGetPosts } from "../../hooks/api/usePost";

export function SignUp() {
 const [name, setName] = useState("");
 const {postData} = useGetPosts()
 const navigate = useNavigate();
 const dispatch = useDispatch();

 function submitUser() {
  dispatch(loginUser({user: name}));
  dispatch(setPost(postData));
   navigate("/main");
 }
 return (
  <SignUpSec>
   <Modal isOpen={true}>
    <Title>Welcome to CodeLeap network!</Title>
    <InputLabel height={"32px"}>
     <label htmlFor="User">Please enter your username</label>
     <input id="User" value={name} onChange={(e) => setName(e.target.value)} />
    </InputLabel>
    <Button
     color={"#FFFFFF"}
     width={"111px"}
     transform={"uppercase"}
     background={"#7695EC"}
     border={"#FFFFFF"}
     disabled={name.length === 0}
     onClick={() => submitUser()}
    >
     Enter
    </Button>
   </Modal>
  </SignUpSec>
 );
}

const SignUpSec = styled.section``;

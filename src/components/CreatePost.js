import styled from "styled-components";
import { InputLabel } from "./InputLabel";
import { Button } from "./Button";

export function CreatePost() {
 return (
  <CreatePostDiv>
   <h2>What’s on your mind?</h2>
   <InputLabel height={"32px"}>
    <label>Title</label>
    <input />
   </InputLabel>

   <InputLabel height={"74px"}>
    <label>Content</label>
    <textarea />
   </InputLabel>

   <Button 
   color={"#FFFFFF"}
   width={"120px"}
   transform={"none"}
   background={"#7695EC"}
   border={"#FFFFFF"}>
    Create
   </Button>
  </CreatePostDiv>
 );
}

const CreatePostDiv = styled.div`
 width: 752px;
 height: 334px;
 border: 1px solid #999999;
 border-radius: 16px;
 margin: 0 auto;
 padding: 1.4rem;
display: flex;
flex-direction: column;
 h2 {
  font-size: 22px;
  font-weight: 700;
 }
`;

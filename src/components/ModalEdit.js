import { Modal } from "./Modal";
import styled from "styled-components";
import { Title } from "./TitleModal";
import { InputLabel } from "./InputLabel";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./Button";
import { handleModal, setPost } from "../actions/actions";
import { useGetPosts, useUpdatePost } from "../hooks/api/usePost";

export function ModalEdit() {
 const { updatedPost } = useSelector((rootReducer) => rootReducer.postsReducer);
 const [title, setTitle] = useState("");
 const [content, setContent] = useState("");
 const {updatePost} = useUpdatePost();
 const {getPosts} = useGetPosts()

 const dispatch = useDispatch();

 useEffect(() => {
    setTitle(updatedPost?.title);
    setContent(updatedPost?.content)
 },[updatedPost])

 const { modalType } = useSelector(
  (rootReducer) => rootReducer.modalReducer
 );

 function closeModal() {
  dispatch(handleModal(null));
 }

 async function saveUpdate(){
    const body = {
        title,
        content
    }
    try {
        await updatePost(updatedPost.id, body);
        const posts = await getPosts()
        dispatch(setPost(posts));
        dispatch(handleModal(null))
    } catch (error) {
        alert("deu ruim")
    }
 }
 return (
  <ModalEditSec>
   <Modal isOpen={modalType?.modalType === "update"} width={"660px"}>
    <Title>Edit item</Title>
    <InputLabel height={"32px"}>
     <label>Title</label>
     <input value={title} onChange={(e) => setTitle(e.target.value)} />
    </InputLabel>

    <InputLabel height={"74px"}>
     <label>Content</label>
     <textarea value={content} onChange={(e) => setContent(e.target.value)} />
    </InputLabel>

    <div className="buttons-edit">
     <Button
      color={"#000000"}
      width={"111px"}
      transform={"none"}
      background={"#FFFFFF"}
      border={"#000000"}
      onClick={() => closeModal()}
     >
      Cancel
     </Button>
     <Button
      color={"#FFFFFF"}
      width={"111px"}
      transform={"none"}
      background={"#47B960"}
      border={"#FFFFFF"}
      onClick={() => saveUpdate()}
     >
      Save
     </Button>
    </div>
   </Modal>
  </ModalEditSec>
 );
}

const ModalEditSec = styled.section`
 .buttons-edit {
  display: flex;
  align-self: flex-end;
  justify-content: space-between;
  width: 250px;
 }
`;

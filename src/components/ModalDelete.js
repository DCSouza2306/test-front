import { Button } from "./Button";
import { Modal } from "./Modal";
import { Title } from "./TitleModal";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { handleModal, setPost } from "../actions/actions";
import { useDeletePost, useGetPosts } from "../hooks/api/usePost";

export function ModalDelete() {
    const dispatch = useDispatch();
    const {deletePost} = useDeletePost();
    const {getPosts} = useGetPosts()
 const { displayModal } = useSelector(
  (rootReducer) => rootReducer.modalReducer
 );
 const { deletedPost } = useSelector((rootReducer) => rootReducer.postsReducer);

 function closeModal(){
    dispatch(handleModal(false))
 }

 async function confirmDelete(){
    try {
        await deletePost(deletedPost.id);
        const posts = await getPosts()
        dispatch(setPost(posts));
        dispatch(handleModal(false))
    } catch (error) {
        alert("deu ruim")
    }
  
 }
 return (
  <ModalDeleteSec>
   <Modal isOpen={displayModal}>
    <Title>Are you sure you want to delete this item?</Title>
    <div className="buttons">
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
      background={"#FF5151"}
      border={"#FFFFFF"}
      onClick={() => confirmDelete()}
     >
      Delete
     </Button>
    </div>
   </Modal>
  </ModalDeleteSec>
 );
}

const ModalDeleteSec = styled.section`
 .buttons {
  display: flex;
  align-self: flex-end;
  justify-content: space-between;
  width: 250px;
 }
`;

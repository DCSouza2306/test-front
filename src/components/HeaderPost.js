import styled from "styled-components";
import { MdDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { handleModal, deletePost, updatePost } from "../actions/actions";

export function HeaderPost({ children, user, id, title, content }) {
 const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
 const dispatch = useDispatch();

 async function deleteUserPost() {
  dispatch(handleModal({modalType: "delete"}));
  dispatch(deletePost({id}));
 }
 async function updateUserPost() {
  dispatch(handleModal({modalType: "update"}));
  dispatch(updatePost({id, title, content}));
 }
 return (
  <HeaderPostDiv showButtons={user === currentUser.user}>
   {children}
   <div className="icons">
    <MdDeleteForever className="icon-item" onClick={() => deleteUserPost()} />
    <FiEdit className="icon-item" onClick={() => updateUserPost()} />
   </div>
  </HeaderPostDiv>
 );
}

const HeaderPostDiv = styled.div`
 min-height: 70px;
 background-color: #7695ec;
 color: #ffffff;
 font-size: 22px;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 1rem;
 border-radius: 16px 16px 0 0;
 border: 1px 1px 0 1px solid #777777;

 p {
  width: 500px;
  word-wrap: break-word;
 }
 .icons {
  font-size: 26px;
  width: 80px;
  display: flex;
  justify-content: space-between;
  visibility: ${(props) => (props.showButtons ? "none" : "hidden")};

  .icon-item {
   cursor: pointer;
  }
 }
`;

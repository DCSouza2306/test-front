import styled from "styled-components";
import { InputLabel } from "./InputLabel";
import { Button } from "./Button";
import { useState } from "react";
import { useCreatePost, useGetPosts } from "../hooks/api/usePost";
import { useSelector, useDispatch } from "react-redux";
import { setPost } from "../actions/actions";

export function CreatePost() {
 const [title, setTitle] = useState("");
 const [content, setContent] = useState("");
 const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);

 const { createPost } = useCreatePost();
 const { getPosts } = useGetPosts();
 const dispatch = useDispatch();

 async function create() {
  const body = {
   username: currentUser.user,
   title,
   content,
  };
  try {
   createPost(body);
   const postData  = await getPosts();
   dispatch(setPost(postData));
   setTitle("");
   setContent("");
  } catch (err) {
   console.log(err);
  }
 }

 return (
  <CreatePostDiv>
   <h2>What’s on your mind?</h2>
   <InputLabel height={"32px"}>
    <label>Title</label>
    <input value={title} onChange={(e) => setTitle(e.target.value)} />
   </InputLabel>

   <InputLabel height={"74px"}>
    <label>Content</label>
    <textarea value={content} onChange={(e) => setContent(e.target.value)} />
   </InputLabel>

   <Button
    color={"#FFFFFF"}
    width={"120px"}
    transform={"none"}
    background={"#7695EC"}
    border={"#FFFFFF"}
    disabled={title.length === 0 && content.length === 0}
    onClick={() => create()}
   >
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

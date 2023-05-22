import styled from "styled-components";
import { Header } from "../../components/Header";
import { CreatePost } from "../../components/CreatePost";
import { Post } from "../../components/Post";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ModalDelete } from "../../components/ModalDelete";
import { ModalEdit } from "../../components/ModalEdit";

export function Main() {
 const navigate = useNavigate();
 const { currentPosts } = useSelector(
  (rootReducer) => rootReducer.postsReducer
 );

 const { modalType } = useSelector((rootReducer) => rootReducer.modalReducer);
 useEffect(() => {
  if (currentPosts === null) {
   navigate("/");
  }
 }, []);

 return (
  <MainSection>
   <ModalEdit />
   <ModalDelete />

   <MainBox>
    <Header />
    <CreatePost />
    {currentPosts?.results?.map((p) => (
     <Post
      key={p.id}
      id={p.id}
      title={p.title}
      user={p.username}
      date={p.created_datetime}
      content={p.content}
     />
    ))}
   </MainBox>
  </MainSection>
 );
}

const MainSection = styled.section`
 background-color: #dddddd;
 position: relative;
`;

const MainBox = styled.div`
 width: 800px;
 height: 100%;
 margin: 0 auto;
 background-color: #ffffff;
`;

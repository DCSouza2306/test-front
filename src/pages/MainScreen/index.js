import styled from "styled-components";
import { Header } from "../../components/Header";
import { CreatePost } from "../../components/CreatePost";
import { Post } from "../../components/Post";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function Main() {
 const navigate = useNavigate()
 const { currentPosts } = useSelector(
  (rootReducer) => rootReducer.postsReducer
 );

 useEffect(() => {if(currentPosts === null){
  navigate("/");
 }}, [])
 

 return (
  <MainSection>
   <MainBox>
    <Header />
    <CreatePost />
    {currentPosts?.results?.map((p) => (
     <Post
      key={p.id}
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
`;

const MainBox = styled.div`
 width: 800px;
 height: 100%;
 margin: 0 auto;
 background-color: #ffffff;
`;

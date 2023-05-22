import styled from "styled-components";
import { HeaderPost } from "./HeaderPost";
import { ContentPost } from "./ContentPost";

export function Post({ title, user, date, content, id }) {
 
 return (
  <PostDiv>
   <HeaderPost user={user} id={id} title={title} content={content}>
    <p>{title}</p>
   </HeaderPost>
   <ContentPost>
    <NameTime>
     <p className="name">@{user}</p>
     <p>{date}</p>
    </NameTime>
    <Content>{content}</Content>
   </ContentPost>
  </PostDiv>
 );
}

const PostDiv = styled.div`
 width: 752px;
 margin: 1.4rem auto 0 auto;
`;

const Content = styled.p`
 margin-top: 1rem;
 font-size: 18px;
 word-wrap: break-word;
`;

const NameTime = styled.div`
 display: flex;
 justify-content: space-between;
 font-size: 18px;
 color: #777777;
 .name {
  font-weight: 700;
 }
`;

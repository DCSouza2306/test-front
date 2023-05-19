import styled from "styled-components";
import { HeaderPost } from "./HeaderPost";
import { ContentPost } from "./ContentPost";

export function Post() {
 return (
  <PostDiv>
   <HeaderPost>
    <p>My First Post at CodeLeap Network!</p>
   </HeaderPost>
   <ContentPost>
    <NameTime>
     <p className="name">@Victor</p>
     <p>25 minutes ago</p>
    </NameTime>
    <Content>
     Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit.
     Pellentesque habitant morbi tristique senectus et netus et malesuada fames
     ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis
     vel nibh at velit scelerisque suscipit.
    </Content>
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

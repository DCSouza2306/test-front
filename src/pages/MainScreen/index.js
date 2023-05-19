import styled from "styled-components";
import { Header } from "../../components/Header";
import { CreatePost } from "../../components/CreatePost";
import { Post } from "../../components/Post";

export function Main(){
    return(
        <MainSection>
            <MainBox>
                <Header />
                <CreatePost />
                <Post />
            </MainBox>
        </MainSection>
    )
}

const MainSection = styled.section`
background-color: #DDDDDD;
`

const MainBox = styled.div`
width: 800px;
height: 100vh;
margin: 0 auto;
background-color: #FFFFFF;
`
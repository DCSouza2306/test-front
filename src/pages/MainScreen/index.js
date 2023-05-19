import styled from "styled-components";
import { Header } from "../../components/Header";
import { CreatePost } from "../../components/CreatePost";

export function Main(){
    return(
        <MainSection>
            <MainBox>
                <Header />
                <CreatePost />
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
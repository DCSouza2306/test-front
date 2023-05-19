import styled from "styled-components";

export function Header(){
    return(
        <HeaderDiv>
            <p>CodeLeap Network</p>
        </HeaderDiv>
    )
}

const HeaderDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding-left: 2rem;
margin-bottom: 2rem;
width: 800px;
height: 80px;
background-color: #7695EC;
font-size: 22px;
font-weight: 700;
color: #FFFFFF;

`
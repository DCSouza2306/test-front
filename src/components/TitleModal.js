import styled from "styled-components";

export function Title({children}){
    return(
        <TitleStyle>
            {children}
        </TitleStyle>
    )
}

const TitleStyle = styled.h2`
font-size: 22px;
  margin-bottom: 1rem
`
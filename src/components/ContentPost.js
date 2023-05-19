import styled from "styled-components";

export function ContentPost({children}){
    return(
        <ContentPostDiv>
            {children}
        </ContentPostDiv>
    )
}

const ContentPostDiv = styled.div`
    border:1px solid #777777;
    border-top: none;
    border-radius: 0 0 16px 16px;
    padding: 1.4rem;
`
import styled from "styled-components";
import { MdDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

export function HeaderPost({ children }) {
 return (
  <HeaderPostDiv>
   {children}
   <div className="icons">
    <MdDeleteForever className="icon-item"/>
    <FiEdit className="icon-item"/>
   </div>
  </HeaderPostDiv>
 );
}

const HeaderPostDiv = styled.div`
 height: 70px;
 background-color: #7695ec;
 color: #ffffff;
 font-size: 22px;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 1rem;
 border-radius: 16px 16px 0 0;
 border: 1px 1px 0 1px solid #777777;
 .icons{
    font-size: 26px;
    width: 80px;
    display: flex;
    justify-content: space-between;
  
    .icon-item{
        cursor: pointer;
    }
 }
`;

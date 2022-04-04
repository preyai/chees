import styled from "styled-components";

export const StyledHistory = styled.div`
    margin:auto;
    border:solid 2px #fff;
    padding:20px;
    max-height:80vh;
    overflow-y:auto;
    box-sizing:border-box;
`

export const StyledUl = styled.ul`
    padding:0;
`

export const StyledLi = styled.li`
    list-style:none;
    font-size:18px;
    color:${props => props.color};
`
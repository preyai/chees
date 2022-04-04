import styled from "styled-components";

export const StyledBoard = styled.div`
    margin:auto;
    display:grid;
    grid-template-columns: repeat(8,minmax( 10px, 10vh));
    grid-template-rows: repeat(8, minmax( 10px, 10vh));
`

export const BoardWrapper = styled.div`
    display:flex;
`
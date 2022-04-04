import styled from "styled-components";

export const StyledBoard = styled.div`
    margin:auto;
    display:grid;
    grid-template-columns: repeat(8,minmax( 10px, 10vh));
    grid-template-rows: repeat(8, minmax( 10px, 10vh));
    @media (max-width:500px) {
        grid-template-columns: repeat(8,minmax( 10px, 12vw));
    grid-template-rows: repeat(8, minmax( 10px, 12vw));
      }
`

export const BoardWrapper = styled.div`
    flex:2;
    display:flex;
`
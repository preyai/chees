import styled from "styled-components";

interface StyledPlayerProps {
    scale: Boolean
}

interface StyledArrowProps {
    rotate: number
}

export const StyledBar = styled.div`
    margin:auto;
    max-height:80vh;
`

export const StyledPlayers = styled.div`
    display:flex;
    gap:30px;
    justify-content:center;
    margin-bottom:30px;
`

export const StyledPlayer = styled.div<StyledPlayerProps>`
    color:${props => props.color};
    transform:scale(${props => props.scale ? 2 : 1});
    transition:.5s;
`

export const StyledClock = styled.div`
    width:200px;
    height:200px;
    border:solid 2px #fff;
    border-radius:50%;
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    color:#fff;
    p {
        padding-top:30px;
    }
`

export const StyledArrow = styled.div<StyledArrowProps>`
    position:absolute;
    top: 0;
    left: 50%;
    height:100%;
    width:2px;
    transform:rotateZ(${props => props.rotate}deg);
    transition: 1s;
    &::before {
        content:'';
        display:block;
        height:50%;
        width:100%;
        background-color:red;
    }
`
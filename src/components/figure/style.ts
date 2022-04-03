import styled from "styled-components";

export const StyledFigure = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height:100%;
    width:100%;
    transform:scale(${props => props.scale});
`

export const StyledSvg = styled.svg`
    height:90%;
    width:auto;
`

export const StyledPath = styled.path`
    fill:${props => props.color}
`

export const StyledCircle = styled.circle`
    fill:${props => props.color}
`
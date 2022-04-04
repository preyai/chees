import styled from "styled-components";

interface FigureWrapperProps {
    scale:Boolean
}

export const FigureWrapper = styled.div<FigureWrapperProps>`
    transform:scale(${props => props.scale ? 1.2 : 1});
    display:flex;
    align-items:center;
    justify-content:center;
    height:100%;
    width:100%;
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
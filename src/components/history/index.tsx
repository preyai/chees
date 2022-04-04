import { useGameContext } from "../../contexts/gameContext";
import { FigureElement, Position } from "../figure";
import { StyledHistory, StyledLi, StyledUl } from "./style";

export interface HistoryItem {
    figure: FigureElement,
    start: Position,
    end: Position,
}

export default function History() {
    const { history } = useGameContext()

    const xName = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    const yName = ['8', '7', '6', '5', '4', '3', '2', '1']

    return (
        <StyledHistory>
            <StyledUl>
                {history.map((h, index) => (
                    <StyledLi color={h.figure.color} key={index}>
                        {h.figure.name}{' '}
                        {xName[h.start.x]}:{yName[h.start.y]}-
                        {xName[h.end.x]}:{yName[h.end.y]}
                    </StyledLi>
                ))}
            </StyledUl>
        </StyledHistory>
    )
}
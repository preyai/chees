import { useEffect, useState } from "react";
import { useGameContext } from "../../contexts/gameContext";
import { PlayerInterface } from "../../utils/player";
import Bar from "../bar";
import { FigureElement, Position } from "../figure";
import History from "../history";
import { TileElement, TileProps } from "../tile";
import { BoardWrapper, StyledBoard } from "./style";

const isPos = (p1: Position, p2: Position) => {
    return (p1.x === p2.x && p1.y === p2.y)
}

export default function Board() {
    const { matrix, players } = useGameContext()
    const [figures, setFigures] = useState<FigureElement[]>([])

    useEffect(() => {
        setFigures(players.reduce(
            (p: FigureElement[], c: PlayerInterface) => { return p.concat(c.figures) }, []
        ))
    }, [players])

    return (
        <BoardWrapper>
            <StyledBoard>
                {matrix &&
                    matrix.map((line: TileElement[]) => (
                        line.map((tile: TileElement) => {
                            const figure = figures.find(f => isPos(f.position, tile.position))
                            if (figure)
                                tile.figure = figure
                            else
                                tile.figure = undefined
                            return (
                                tile.constructor({ tile: tile, figure: figure })
                            )
                        })
                    ))
                }
            </StyledBoard>
        </BoardWrapper>

    )
}
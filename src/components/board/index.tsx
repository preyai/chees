import { Tile } from "../../models/Tile";
import TileElement from "../tile";
import { BoardElement, BoardWrapper } from "./style";

interface BoardProps {
    matrix: Tile[][]
}

export default function Board(props: BoardProps) {

    const { matrix } = props

    return (
        <BoardWrapper>
            <BoardElement>
                {matrix.map(line => (
                    line.map(item => (
                        <TileElement color={item.color} figure={item.figure && item.figure} />
                    ))
                ))}
            </BoardElement>
        </BoardWrapper>
    )
}

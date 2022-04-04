import { Children } from "react";
import { useGameContext } from "../../contexts/gameContext";
import Figure, { FigureElement, Position } from "../figure";
import { SvgProps } from "../figure/svg";
import { StyledTile } from "./style";

export interface TileElement {
    constructor: ((props: TileProps) => JSX.Element),
    color: string,
    position: Position,
    figure?: FigureElement,
    available?: Boolean
}

export interface TileProps {
    tile: TileElement
    figure?: FigureElement
}

export default function Tile(props: TileProps) {
    const { tile, figure } = props
    const { select, move } = useGameContext()

    const click = () => {
        console.log(tile.available);
        if (tile.available && select) {
            move(tile)
        }
    }

    return (
        <StyledTile color={tile.available ? 'green' : tile.color} onClick={click}>
            {figure &&
                <Figure figure={figure} />
            }
        </StyledTile>
    )
}
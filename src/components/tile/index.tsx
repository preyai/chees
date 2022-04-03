import { useState } from "react";
import { Figure } from "../../models/Figure";
import FigureElement from "../figure";
import { StyledTile } from "./style";

interface TileProps {
    color: string;
    figure?: Figure
}

export default function TileElement(props: TileProps) {
    const { color, figure } = props

    return (
        <StyledTile color={color} >
            {figure &&
                <FigureElement figure={figure} />
            }
        </StyledTile >
    )
}
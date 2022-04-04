import { FigureColor, FigureElement } from "../components/figure"
import { createFigures } from "./game"

export interface PlayerInterface {
    name: string,
    color: FigureColor,
    figures: FigureElement[]
}

export function createPlayer(name: string, color: FigureColor): PlayerInterface {
    const player = {
        name,
        color,
        figures: []
    }
    return createFigures(player)
}
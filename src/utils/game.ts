import { FigureColor, FigureElement, Pattern, Position } from "../components/figure";
import { BishopSvg, KingSvg, KnightSvg, PawnSvg, QueenSvg, RookSvg, SvgProps } from "../components/figure/svg";
import { PlayerInterface } from "./player";

export function createFigures(player: PlayerInterface): PlayerInterface {
    const figures: FigureElement[] = []
    figures.push(getFigure(player.color, 'King', 0))
    figures.push(getFigure(player.color, 'Queen', 0))
    for (let i = 0; i < 2; i++)
        figures.push(getFigure(player.color, 'Rook', i))
    for (let i = 0; i < 2; i++)
        figures.push(getFigure(player.color, 'Bishop', i))
    for (let i = 0; i < 2; i++)
        figures.push(getFigure(player.color, 'Knight', i))
    for (let i = 0; i < 8; i++)
        figures.push(getFigure(player.color, 'Pawn', i))
    player.figures = figures
    // if (player.color === '#fff')
    //     player.figures[0].position = { x: 2, y: 2 }

    return player
}

function getFigure(color: FigureColor, name: string, n: number): FigureElement {
    return {
        name,
        color,
        constructor: getSvg(name),
        position: getPosition(name, color, n),
        pattern: getPattern(name, color)
    }
}

function getSvg(name: string) {
    switch (name) {
        case 'King':
            return KingSvg
        case 'Queen':
            return QueenSvg
        case 'Rook':
            return RookSvg
        case 'Bishop':
            return BishopSvg
        case 'Knight':
            return KnightSvg
        case 'Pawn':
            return PawnSvg
        default:
            return PawnSvg
    }
}

function getPosition(name: string, color: FigureColor, n: number): Position {
    switch (name) {
        case 'King':
            return { x: 4, y: color === "#000" ? 0 : 7 }
        case 'Queen':
            return { x: 3, y: color === "#000" ? 0 : 7 }
        case 'Rook':
            return { x: n === 0 ? 0 : 7, y: color === "#000" ? 0 : 7 }
        case 'Bishop':
            return { x: n === 0 ? 2 : 5, y: color === "#000" ? 0 : 7 }
        case 'Knight':
            return { x: n === 0 ? 1 : 6, y: color === "#000" ? 0 : 7 }
        case 'Pawn':
            return { x: n, y: color === "#000" ? 1 : 6 }
        default:
            return { x: n, y: color === "#000" ? 1 : 6 }
    }
}

function getPattern(name: string, color: FigureColor): Pattern {
    switch (name) {
        case 'King':
            return {
                move: [
                    { x: 1, y: -1 },
                    { x: 1, y: 0 },
                    { x: 1, y: 1 },
                    { x: 0, y: 1 },
                    { x: 0, y: -1 },
                    { x: -1, y: -1 },
                    { x: -1, y: 0 },
                    { x: -1, y: 1 },
                ],
                length: 1
            }
        case 'Queen':
            return {
                move: [
                    { x: 1, y: -1 },
                    { x: 1, y: 0 },
                    { x: 1, y: 1 },
                    { x: 0, y: 1 },
                    { x: 0, y: -1 },
                    { x: -1, y: -1 },
                    { x: -1, y: 0 },
                    { x: -1, y: 1 },
                ],
                length: 10
            }
        case 'Rook':
            return {
                move: [
                    { x: 0, y: -1 },
                    { x: 0, y: 1 },
                    { x: -1, y: 0 },
                    { x: 1, y: 0 },
                ],
                length: 10
            }
        case 'Bishop':
            return {
                move: [
                    { x: 1, y: 1 },
                    { x: 1, y: -1 },
                    { x: -1, y: -1 },
                    { x: -1, y: 1 },
                ],
                length: 10
            }
        case 'Knight':
            return {
                move: [
                    { x: 2, y: 1 },
                    { x: 2, y: -1 },
                    { x: -2, y: 1 },
                    { x: -2, y: -1 },
                    { x: 1, y: 2 },
                    { x: 1, y: -2 },
                    { x: -1, y: 2 },
                    { x: -1, y: -2 },
                ],
                length: 1
            }
        case 'Pawn':
            if (color === '#000')
                return {
                    move: [
                        { x: 0, y: 1 },
                        // { x: 0, y: -1 },
                    ],
                    length: 2
                }
            else
                return {
                    move: [
                        // { x: 0, y: 1 },
                        { x: 0, y: -1 },
                    ],
                    length: 2
                }
        default:
            return {
                move: [
                    { x: 1, y: 1 },
                ],
                length: 1
            }
    }
}
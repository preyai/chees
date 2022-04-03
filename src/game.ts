import { BishopSvg, KingSvg, KnightSvg, PawnSvg, QueenSvg, RookSvg } from "./components/figure/svg";
import TileElement from "./components/tile";
import { color } from "./models/color";
import { Figure } from "./models/Figure";
import { Player } from "./models/Player";
import { Tile } from "./models/Tile";

function getPlayers(): Player[] {
    const res: Player[] = []
    const colors: color[] = ['#fff', '#000']
    for (const color of colors) {
        const figures: Figure[] = getFigures(color)
        const player: Player = {
            color,
            figures
        }
        res.push(player)
    }
    return res
}

function getMatrix(players: Player[]) {
    const res: Tile[][] = [];
    for (let i = 0; i < 8; i++) {
        const line: Tile[] = [];
        for (let n = 0; n < 8; n++) {
            const color = (i + n) % 2 === 0 ? '#b9b8b8' : '#242424'
            const tile: Tile = {
                color: color,

                // element: TileElement({ color: color })
            }
            line.push(tile);
        }
        res.push(line);
    }
    for (const player of players) {
        for (const figure of player.figures) {
            res[figure.defoltPosition.y][figure.defoltPosition.x].figure = figure
        }
    }
    return res;
}

function getFigures(color: color) {
    const res: Figure[] = []
    res.push(getKing(color))
    res.push(getQueen(color))
    for (let i = 0; i < 2; i++)
        res.push(getRook(color, i))
    for (let i = 0; i < 2; i++)
        res.push(getBishop(color, i))
    for (let i = 0; i < 2; i++)
        res.push(getKnight(color, i))
    for (let i = 0; i < 8; i++)
        res.push(getPawn(color, i))

    return res
}

function getKing(color: color) {
    const defoltPosition = { x: 4, y: color === "#000" ? 0 : 7 }
    const res: Figure = {
        name: 'King',
        icon: KingSvg({ color }),
        color: color,
        defoltPosition,
    }
    return res;
}

function getQueen(color: color) {
    const defoltPosition = { x: 3, y: color === "#000" ? 0 : 7 }
    const res: Figure = {
        name: 'Queen',
        icon: QueenSvg({ color }),
        color: color,
        defoltPosition,
    }
    return res;
}

function getRook(color: color, n: number = 0) {
    const defoltPosition = { x: n === 0 ? 0 : 7, y: color === "#000" ? 0 : 7 }
    const res: Figure = {
        name: 'Rook',
        icon: RookSvg({ color }),
        color: color,
        defoltPosition,
    }
    return res;
}

function getBishop(color: color, n: number = 0) {
    const defoltPosition = { x: n === 0 ? 2 : 5, y: color === "#000" ? 0 : 7 }
    const res: Figure = {
        name: 'Bishop',
        icon: BishopSvg({ color }),
        color: color,
        defoltPosition,
    }
    return res;
}

function getKnight(color: color, n: number = 0) {
    const defoltPosition = { x: n === 0 ? 1 : 6, y: color === "#000" ? 0 : 7 }
    const res: Figure = {
        name: 'Knight',
        icon: KnightSvg({ color }),
        color: color,
        defoltPosition,
    }
    return res;
}

function getPawn(color: color, n: number = 0) {
    const defoltPosition = { x: n, y: color === "#000" ? 1 : 6 }
    const res: Figure = {
        name: 'Pawn',
        icon: PawnSvg({ color }),
        color: color,
        defoltPosition,
    }
    return res;
}

export { getMatrix, getFigures, getPlayers }
import Tile, { TileElement, TileProps } from "../components/tile"

export function createMatrix() {
    const matrix: TileElement[][] = []
    for (let i = 0; i < 8; i++) {
        const line: TileElement[] = [];
        for (let n = 0; n < 8; n++) {
            const color = (i + n) % 2 === 0 ? '#b9b8b8' : '#242424'
            const tile: TileElement = {
                color: color,
                constructor: Tile,
                position: { x: n, y: i }
            }
            line.push(tile);
        }
        matrix.push(line);
    }
    // for (const player of players) {
    //     for (const figure of player.figures) {
    //         res[figure.defoltPosition.y][figure.defoltPosition.x].figure = figure
    //     }
    // }
    return matrix
}
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import { FigureElement, Position } from "../components/figure";
import { TileElement, TileProps } from "../components/tile";
import { createMatrix } from "../utils/matrix";
import { createPlayer, PlayerInterface } from "../utils/player";

interface gameContextInterface {
    matrix: TileElement[][],
    players: PlayerInterface[],
    activePlayer: PlayerInterface,
    setAvalible: (tile: TileElement) => void,
    resetAvalible: () => void,
    select: FigureElement | null,
    setSelect: Dispatch<SetStateAction<FigureElement | null>>,
    move: (tile: TileElement) => void
}

interface GameProviderInterface {
    children: JSX.Element
}

const GameContex = createContext<gameContextInterface>({
    matrix: [],
    players: [],
    activePlayer: { name: '', color: '#000', figures: [] },
    setAvalible: (tile: TileElement) => { },
    resetAvalible: () => { },
    select: null,
    setSelect: () => null,
    move: (tile: TileElement) => { }
})

export function GameProvider({ children }: GameProviderInterface) {
    const [matrix, setMatrix] = useState(createMatrix())
    const [players, setPlayers] = useState([
        createPlayer('user1', '#fff'),
        createPlayer('user2', '#000')
    ])
    const [activePlayer, setActivePlayer] = useState<PlayerInterface>(players[0])
    const [select, setSelect] = useState<FigureElement | null>(null)


    function resetAvalible(): void {
        const clone = matrix.slice();
        clone.forEach(line => {
            line.forEach(tile => {
                tile.available = false
            });
        });
        setMatrix(clone);
    }

    function setAvalible(tile: TileElement): void {
        const clone = matrix.slice();
        clone[tile.position.y][tile.position.x].available = true;
        setMatrix(clone);
    }

    function move(tile: TileElement) {
        if (select) {
            if (tile.figure) {
                const player = players.find(p => p.color === tile.figure?.color)
                if (player) {
                    if (tile.figure.name === 'King')
                        player.figures = []
                    else
                        player.figures = player.figures.filter(f => f !== tile.figure)
                }
                const clone = players.slice();
                setPlayers(clone);
            }
            if (select.name === 'Pawn')
                select.pattern.length = 1
            select.position = tile.position
            setSelect(null)
            resetAvalible()
            const newPlayer = players.find(p => p.color !== activePlayer.color)
            if (newPlayer)
                setActivePlayer(newPlayer)
            const clone = matrix.slice()
            setMatrix(clone)
            // const clone2 = players.slice();
            // setPlayers(clone2);
        }
    }

    return (
        <GameContex.Provider value={{
            matrix,
            players,
            activePlayer,
            setAvalible,
            resetAvalible,
            select,
            setSelect,
            move
        }}>
            {children}
        </GameContex.Provider>
    )
}

export function useGameContext() {
    return useContext(GameContex)
}
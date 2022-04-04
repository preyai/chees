import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { FigureElement, Position } from "../components/figure";
import { HistoryItem } from "../components/history";
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
    move: (tile: TileElement) => void,
    history: HistoryItem[],
    time: number
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
    move: (tile: TileElement) => { },
    history: [],
    time: 0
})

export function GameProvider({ children }: GameProviderInterface) {
    const [matrix, setMatrix] = useState(createMatrix())
    const [players, setPlayers] = useState([
        createPlayer('user1', '#fff'),
        createPlayer('user2', '#000')
    ])
    const [activePlayer, setActivePlayer] = useState<PlayerInterface>(players[0])
    const [select, setSelect] = useState<FigureElement | null>(null)
    const [history, setHistory] = useState<HistoryItem[]>([])
    const [time, setTime] = useState<number>(60)

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID)
    }, [])

    const tick = () => {
        setTime((prev) => {
            if (prev && prev > 0)
                return prev - 1
            else
                endTurn()
            return 0
        })
    }

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
            setHistory(history.concat([{ figure: select, start: select.position, end: tile.position }]))
            select.position = tile.position

            endTurn();

            // const clone2 = players.slice();
            // setPlayers(clone2);
        }
    }

    function reRender() {
        const clone = matrix.slice();
        setMatrix(clone);
    }

    function endTurn() {
        setSelect(null)
        resetAvalible()
        const newPlayer = players.find(p => p.color !== activePlayer.color);
        if (newPlayer)
            setActivePlayer(newPlayer);
        setTime(60)
        reRender();
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
            move,
            history,
            time
        }}>
            {children}
        </GameContex.Provider>
    )

}

function tick(time: number, setTime: Dispatch<SetStateAction<number>>, endTurn: () => void) {
    console.log(time);

    if (time > 0)
        setTime(time - 1);

    else
        endTurn();
}

export function useGameContext() {
    return useContext(GameContex)
}
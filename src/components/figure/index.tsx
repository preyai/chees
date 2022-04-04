import { title } from "process";
import { useState } from "react";
import { useGameContext } from "../../contexts/gameContext";
import { TileElement } from "../tile";
import { FigureWrapper } from "./style";
import { PawnSvg, SvgProps } from "./svg";

export type FigureColor = '#fff' | '#000';

export interface Position {
    x: number;
    y: number;
}

export interface Pattern {
    move: Position[],
    length: number
}

export interface FigureElement {
    name: string,
    constructor: ((props: SvgProps) => JSX.Element),
    color: FigureColor,
    position: Position,
    pattern: Pattern
}

export interface FigureProps {
    figure: FigureElement
}

export default function Figure(props: FigureProps) {
    const { figure } = props
    // const [] = useState<Boolean>(false)

    const { matrix, activePlayer, setAvalible, resetAvalible, select, setSelect } = useGameContext()

    const getL = (x: number, i: number): number => {
        if (x > 0)
            return (x + i)
        if (x < 0)
            return (x - 1)
        return 0
    }

    const click = () => {
        if (activePlayer.color === figure.color) {
            const { pattern } = figure
            setSelect(figure)
            resetAvalible()
            const avalible = []
            for (const p of pattern.move) {
                let s = true
                for (let i = 0; i < pattern.length; i++) {
                    if (s) {
                        const y = figure.position.y + (p.y > 0 ? p.y + i : p.y < 0 ? p.y - i : 0)
                        const x = figure.position.x + (p.x > 0 ? p.x + i : p.x < 0 ? p.x - i : 0)
                        // if (p.y != 0) + i
                        // if (p.y != 0) + i
                        console.log(p.y > 0);
                        // console.log(i)
                        // console.log(getL(p.y, i));
                        // console.log(figure.position.y);
                        // console.log(figure.position.y + getL(p.y, i));



                        if (x > -1 && x < 8 && y > -1 && y < 8) {
                            const tile: TileElement = matrix[y][x]
                            console.log(tile);
                            if (tile.figure) {
                                if (tile.figure.color !== figure.color)
                                    avalible.push(tile)
                                s = false
                            }
                            else
                                avalible.push(tile)
                        }
                    }
                }
            }
            for (const a of avalible) {
                setAvalible(a)
            }
        }
    }

    return (
        <FigureWrapper scale={select === figure} onClick={click}>
            {
                figure.constructor({ color: figure.color })
            }
        </FigureWrapper>
    )
}
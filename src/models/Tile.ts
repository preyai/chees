import { ReactElement } from "react";
import { Figure } from "./Figure";

type tileFigure = Figure | null;

export interface Tile {
    color: string,
    figure?: Figure
    // element: ReactElement
}
import { Figure } from "../../models/Figure"

export interface FigureProps {
    figure: Figure
}

export interface SvgProps {
    color: string,
    select?: boolean
}
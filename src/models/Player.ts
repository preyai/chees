import { color } from "./color";
import { Figure } from "./Figure";

export interface Player {
    color: color,
    figures: Figure[]
}
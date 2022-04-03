import { ReactElement } from "react";
import { color } from "./color";

interface Position {
    x: number;
    y: number;
}

export interface Figure {
    name: string,
    icon: JSX.Element,
    color: color,
    defoltPosition: Position,
    pattern?: any,
}
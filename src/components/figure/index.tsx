import { useState } from 'react'
import { FigureProps } from './interfaces'
import { StyledFigure } from './style'

export default function FigureElement(props: FigureProps) {
    const { figure } = props
    const [position, setPosition] = useState(figure.defoltPosition)
    const [select, setSelect] = useState(false)

    const click = () => {
        console.log(figure.icon.props);

        setSelect(true)
    }

    return (
        <StyledFigure onClick={click}>
            {figure.icon}
        </StyledFigure>
    )
}

import { useGameContext } from "../../contexts/gameContext";
import { StyledArrow, StyledBar, StyledClock, StyledPlayer, StyledPlayers } from "./style";

export default function Bar() {
    const { players, activePlayer, time } = useGameContext()
    return (
        <StyledBar>
            <StyledPlayers>
                {players.map(player => (
                    <StyledPlayer color={player.color} scale={player === activePlayer}>
                        {player.name}
                    </StyledPlayer>
                ))}
            </StyledPlayers>
            <StyledClock>
                <p>{time}</p>
                <StyledArrow rotate={-(360 / 60) * time} />
            </StyledClock>
        </StyledBar>
    )
}
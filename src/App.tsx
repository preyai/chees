import GlobalStyle from './globalStyles';
import Board from "./components/board";
import { useEffect, useState } from 'react';
import { getFigures, getMatrix, getPlayers } from './game';
import { Figure } from './models/Figure';
import { Player } from './models/Player';
import { Tile } from './models/Tile';


function App() {
  const [selected, setSelected] = useState<Figure>()
  const [players, setPlayers] = useState<Player[]>(getPlayers())
  const [matrix, setMatrix] = useState(getMatrix(players))

  const rerender = (newMatrix: Tile[][]) => {
    setMatrix(newMatrix)
  }

  useEffect(() => {
  }, [])

  return (
    <div className="App">
      <GlobalStyle />
      <Board matrix={matrix} />
    </div>
  );
}

export default App;

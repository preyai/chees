import Board from './components/board';
import { GameProvider } from './contexts/gameContext';
import GlobalStyle from './globalStyles';


function App() {

  return (
    <div className="App">
      <GlobalStyle />
      <GameProvider>
        <Board />
      </GameProvider>
    </div>
  );
}

export default App;

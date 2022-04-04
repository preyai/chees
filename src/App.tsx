import Bar from './components/bar';
import Board from './components/board';
import History from './components/history';
import { GameProvider } from './contexts/gameContext';
import GlobalStyle from './globalStyles';


function App() {

  return (
    <div className="App">
      <GlobalStyle />
      <GameProvider>
        <>
          <Bar />
          <Board />
          <History />
        </>
      </GameProvider>
    </div>
  );
}

export default App;

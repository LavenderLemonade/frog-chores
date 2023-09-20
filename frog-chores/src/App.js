import './App.css';
import chores from './choresdone.png'
import expectantFrog from './firstfrog.png'

function App() {
  return (
    <div className="App">
      <img src={chores} alt='choresdone' />
      <img src={expectantFrog} alt='frog1' />
    </div>
  );
}

export default App;

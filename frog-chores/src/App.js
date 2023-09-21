import './App.css';
import chores from './choresdone.png'
import expectantFrog from './firstfrog.png'
import buttonOne from './buttonfirst.png'

function App() {
  return (
    <div className="App">
      <img src={chores} alt='choresdone' />
      <img src={expectantFrog} alt='frog1' />
      <button><img src={buttonOne} alt='choresdone' />  </button>
    </div>
  );
}

export default App;

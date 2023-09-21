import { useState } from 'react';
import './App.css';
import chores from './choresdone.png'
import expectantFrog from './firstfrog.png'
import buttonOne from './buttonfirst.png'
import buttonTwo from './buttonsecond.png'

function App() {

  const [btnImg, setBtn] = useState(buttonOne);

  function handleClick() {
    console.log('clicked!');
    setBtn(buttonTwo);
  }

  return (
    <div className="App">
      <img src={chores} alt='choresdone' />
      <img src={expectantFrog} alt='frog1' />
      <button onClick={handleClick}><img src={btnImg} alt='choresdone' />  </button>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import chores from './choresdone.png'
import expectantFrog from './firstfrog.png'
import buttonOne from './buttonfirst.png'
import buttonTwo from './buttonsecond.png'
import buttonThree from './buttonthird.png'

function App() {

  const [state, setState] = useState({
    showFirst: true,
    showSecond: false,
    showThird: false
  });

  function handleClick() {
    setState({
      showFirst: false,
      showSecond: true,
    });

    setState({
      showSecond: false,
      showThird: true,
    });


  }


  const { showFirst, showSecond, showThird } = state;

  return (
    <div className="App">
      <img src={chores} alt='choresdone' />
      <img src={expectantFrog} alt='frog1' />

      <button onClick={handleClick}>
        <img id="img1" className={`${showFirst ? "visible" : "hidden"}`} src={buttonOne} alt='choresdone' />
        <img id="img2" className={`${showSecond ? "visible" : "hidden"}`} src={buttonTwo} alt='choresdone' />
        <img id="img3" className={`${showThird ? "visible" : "hidden"}`} src={buttonThree} alt='choresdone' />
      </button>
    </div>
  );
}

export default App;

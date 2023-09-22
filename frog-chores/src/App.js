import { useState, useEffect } from 'react';
import './App.css';
import chores from './choresdone.png'
import expectantFrog from './firstfrog.png'
import buttonOne from './buttonfirst.png'
import buttonThree from './buttonthird.png'
import goodJob from './goodjob.png'
import secondFrog from './secondfrog.png'

function App() {

  const [state, setState] = useState({
    showFirst: true,
    showThird: false,
    frog: expectantFrog,
    message: chores
  });

  function handleClick() {
    setState({
      showFirst: false,
      showThird: true,
      frog: secondFrog,
      message: goodJob
    });

  }




  const { showFirst, showThird, frog, message } = state;

  return (
    <div className="App">
      <img src={message} alt='choresdone' />
      <img src={frog} alt='frog1' />

      <button onClick={handleClick}>
        <img id="img1" className={`${showFirst ? "visible" : "hidden"}`} src={buttonOne} alt='choresdone' />
        <img id="img3" className={`${showThird ? "visible" : "hidden"}`} src={buttonThree} alt='choresdone' />
      </button>
    </div>
  );
}

export default App;

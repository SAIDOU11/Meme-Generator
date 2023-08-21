import Header from './components/Header.jsx';
import Meme from './components/Meme.jsx';
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const minusOne = () => {
    if (count < 1) {
      return;
    }
    setCount(count - 1);
  };

  const plusOne = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="counter">
        <button onClick={minusOne} className="counter--minus">
          -
        </button>
        <div className="counter--count">
          <h1>{count}</h1>
        </div>
        <button onClick={plusOne} className="counter--plus">
          +
        </button>
      </div>

      {/* <Header /> */}
      {/* <Meme /> */}
    </>
  );
};

export default App;

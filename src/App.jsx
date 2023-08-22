import Header from './components/Header.jsx';
import Meme from './components/Meme.jsx';
import { useState } from 'react';

const App = () => {
  const [isGoingOut, setIsGoingOut] = useState(true);

  // const handleClick = () => {
  //   setIsGoingOut(!isGoingOut);
  // };

  return (
    <>
      <div className="state">
        <h1 className="state--title">Do I feel like going out tonight?</h1>
        <div
          onClick={() => setIsGoingOut(!isGoingOut)}
          className="state--value"
        >
          <h1> {isGoingOut ? 'YES' : 'NO'} </h1>
        </div>
      </div>

      {/* <Header /> */}
      {/* <Meme /> */}
    </>
  );
};

export default App;

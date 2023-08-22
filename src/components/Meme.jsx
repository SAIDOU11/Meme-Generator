import { useState } from 'react';
import memesData from '../memesData.jsx';

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/1ur9b0.jpg',
  });

  const [allMemesImages, setAllMemesImages] = useState(memesData);

  const getRandomImage = () => {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((previousState) => {
      return { ...previousState, randomImage: url };
    });
  };

  return (
    <main>
      <div className="meme-container">
        <div className="input-text">
          <input className="top-text" placeholder="Shut up" type="text" />{' '}
          <input
            className="bottom-text"
            placeholder="and take my money"
            type="text"
          />
        </div>
        <div className="btn-container">
          <button onClick={getRandomImage} className="btn">
            Get a new meme image 🖼️
          </button>
        </div>
        <img className="meme-img" src={meme.randomImage} />
      </div>
    </main>
  );
};

export default Meme;

import { useState } from 'react';
import data from '../memesData.jsx';

const Meme = () => {
  const [memeImage, setMemeImage] = useState('');

  const getRandomMeme = () => {
    const memesArray = data.data.memes;
    const oneMeme = Math.floor(Math.random() * memesArray.length);
    const { name, url } = memesArray[oneMeme];
    console.log(name, url);
    return setMemeImage(url);
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
          <button onClick={getRandomMeme} className="btn">
            Get a new meme image 🖼️{' '}
          </button>
        </div>
        <img className="meme-img" src={memeImage} />
      </div>
    </main>
  );
};

export default Meme;

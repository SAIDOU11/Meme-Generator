import { useState } from 'react';
import memesData from '../memesData.jsx';

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/30b1gx.jpg',
  });

  const [allMemeImages, setAllMemeImage] = useState(memesData);

  const getRandomMeme = () => {
    const memesArray = allMemeImages.data.memes;
    const oneMeme = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[oneMeme].url;
    setMeme((previousMeme) => {
      return { ...previousMeme, randomImage: url };
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
          <button onClick={getRandomMeme} className="btn">
            Get a new meme image 🖼️{' '}
          </button>
        </div>
        <img className="meme-img" src={meme.randomImage} />
      </div>
    </main>
  );
};

export default Meme;

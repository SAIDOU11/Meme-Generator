import { useState } from 'react';
import memesData from '../memesData.jsx';

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/1ur9b0.jpg',
  });

  console.log(meme.bottomText);

  const [allMemesImages, setAllMemesImages] = useState(memesData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const getRandomImage = (event) => {
    event.preventDefault();
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
          <input
            onChange={handleChange}
            className="top-text"
            placeholder="Shut up"
            type="text"
            name="topText"
            value={meme.topText}
          />{' '}
          <input
            onChange={handleChange}
            className="bottom-text"
            placeholder="and take my money"
            type="text"
            name="bottomText"
            value={meme.bottomText}
          />
        </div>
        <div className="btn-container">
          <button onClick={getRandomImage} className="btn">
            Get a new meme image 🖼️
          </button>
        </div>
        <div className="meme">
          <img className="meme-img" src={meme.randomImage} />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText} </h2>
        </div>
      </div>
    </main>
  );
};

export default Meme;

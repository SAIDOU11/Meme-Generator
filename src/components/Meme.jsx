import { useEffect, useState } from 'react';

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/1ur9b0.jpg',
  });
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((data) => {
        setAllMemes(data.data.memes);
      });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const getRandomImage = (event) => {
    event.preventDefault();
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
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

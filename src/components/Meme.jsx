import data from '../memesData.jsx';

const Meme = () => {
  const getRandomMeme = () => {
    const memesArray = data.data.memes;
    const oneMeme = Math.floor(Math.random() * memesArray.length);
    const urlMeme = memesArray[oneMeme].url;
    const { name } = memesArray[oneMeme];
    console.log(oneMeme, urlMeme, name);
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
      </div>
    </main>
  );
};

export default Meme;

import logo from '../assets/troll-face.png';

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-container-title">
        <img style={{ height: '27px' }} src={logo} alt="troll-face" />{' '}
        <h3>Meme Generator</h3>
      </div>
      <div className="header-container-project">
        <p style={{ fontSize: '0.8rem' }}>React Course - Project 3</p>
      </div>
    </header>
  );
};

export default Header;

import Header from './components/Header.jsx';
import Meme from './components/Meme.jsx';
import { useState } from 'react';
import user from './assets/user.png';
import starFilled from './assets/star-filled.png';
import starEmpty from './assets/star-empty.png';

const App = () => {
  const [contact, setContact] = useState({
    firstName: 'John',
    lastName: 'Doe',
    phone: '+1 (719) 555-1212 ',
    email: 'itsmyrealname@example.com',
    isFavorite: false,
  });

  const toggleFavorite = () => {
    console.log('toggle Favorite');
  };

  return (
    <main>
      <article className="card">
        <img className="card--image" src={user} alt="Photo de profil" />
        <div className="card--info">
          <img
            src={contact.isFavorite ? starFilled : starEmpty}
            alt="User"
            className="card--favorite"
            onClick={toggleFavorite}
          />
          <h2 className="card--name">
            {contact.firstName} {contact.lastName}{' '}
          </h2>
          <p className="card--contact"> {contact.phone} </p>
          <p className="card--contact"> {contact.email} </p>
        </div>
      </article>
    </main>
  );
};

export default App;
{
  /* <Header /> */
}
{
  /* <Meme /> */
}

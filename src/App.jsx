import Header from './components/Header.jsx';
import Meme from './components/Meme.jsx';
import { useState } from 'react';
import user from './assets/user.png';
import Head from './components/Head.jsx';
import Body from './components/Body.jsx';

import Star from './components/Star.jsx';

const App = () => {
  return (
    <>
      <Header />
      <Meme />
    </>
  );
};

export default App;

/*
  const [contact, setContact] = useState({
    firstName: 'John',
    lastName: 'Doe',
    phone: '+1 (719) 555-1212 ',
    email: 'itsmyrealname@example.com',
    isFavorite: true,
  });

  const toggleFavorite = () => {
    setContact((previousState) => {
      return { ...previousState, isFavorite: !previousState.isFavorite };
    });
  };
 <main>
      <article className="card">
        <img src={user} alt="user" className="card--image" />
        <div className="card--info">
          <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />

          <h2 className="card--image">
            {' '}
            {contact.firstName} {contact.lastName}{' '}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>
      </article>
    </main>
*/

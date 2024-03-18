import React from 'react';
import '../../styles.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <img src="https://i.pinimg.com/originals/dd/53/b6/dd53b6ee7cc7fea090ecc9666f20b7af.jpg" alt="Logo" className="logo" />
        <h1 className="title">Os melhores filmes estão aqui</h1>
      </div>
    </header>
  );
};

export default Header;
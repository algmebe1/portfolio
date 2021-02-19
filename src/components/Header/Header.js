import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';


function Header() {
    return (
        <div>
        <header className="header-container">
            <h1 className="header__title">Hi 👋🏼, I'm Alberto Gómez!</h1>

            <hr  className="header__title--spacer"/>

            <h4 className="header__subtitle">A passionate Full Stack Developer, currently based in Spain</h4>

            <p className="header__introduction">I started my professional career as an engineer. That job allowed to me to develop analytical capacity, Project management and teamwork skills among others.
In love with new technologies, I decided to step in the software development industry, in order to convert something that I enjoy, which is coding, in my job.</p>
        </header>
        <Navigation />
        </div>)
}

export default Header;
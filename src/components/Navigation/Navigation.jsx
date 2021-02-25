/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react';
import './Navigation.css';

function Navigation() {
  useEffect(() => {
    const url = window.location.pathname.split('/');
    const target = url[url.length - 1].toLowerCase();
    const element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);
  return (
    <div className="header__nav-buttons fixed-top">
      <a
        href="/"
        onClick={(e) => {
          const about = document.getElementById('about');
          e.preventDefault();
          about && about.scrollIntoView({ behavior: 'smooth', block: 'start' });
          window.history.pushState('about', 'about', '/about');
        }}
      >
        ABOUT
      </a>
      <a
        href="/"
        onClick={(e) => {
          const skills = document.getElementById('skills');
          e.preventDefault();
          skills && skills.scrollIntoView({ behavior: 'smooth', block: 'start' });
          window.history.pushState('skills', 'skills', '/skills');
        }}
      >
        SKILLS

      </a>

      <a
        href="/"
        onClick={(e) => {
          const projects = document.getElementById('projects');
          e.preventDefault();
          projects && projects.scrollIntoView({ behavior: 'smooth', block: 'start' });
          window.history.pushState('projects', 'projects', '/projects');
        }}
      >
        PROJECTS

      </a>

      <a
        href="/"
        onClick={(e) => {
          const contact = document.getElementById('contact');
          e.preventDefault();
          contact && contact.scrollIntoView({ behavior: 'smooth', block: 'start' });
          window.history.pushState('contact', 'contact', '/contact');
        }}
      >
        CONTACT

      </a>
    </div>
  );
}

export default Navigation;

import React, {useEffect} from 'react';
import './Navigation.css'

function Navigation() {
    useEffect(() => {
        let url = window.location.pathname.split('/');
        let target = url[url.length - 1].toLowerCase();
        let element = document.getElementById(target);
        element && element.scrollIntoView({behavior: 'smooth', block: 'start'});
    }, [])
    return (
        <div className="header__nav-buttons">
            <a href="/" 
            onClick={e => 
                {let skills = document.getElementById('skills');
            e.preventDefault()
        skills && skills.scrollIntoView({behavior: 'smooth', block: 'start'});
        window.history.pushState('skills', 'skills', '/skills')
    }}>Skills</a>

<a href="/" 
            onClick={e => 
                {let projects = document.getElementById('projects');
            e.preventDefault()
        projects && projects.scrollIntoView({behavior: 'smooth', block: 'start'});
        window.history.pushState('projects', 'projects', '/projects')
    }}>Projects</a>

<a href="/" 
            onClick={e => 
                {let contact = document.getElementById('contact');
            e.preventDefault()
        contact && contact.scrollIntoView({behavior: 'smooth', block: 'start'});
        window.history.pushState('contact', 'contact', '/contact')
    }}>Contact</a>
        </div>
        )
}

export default Navigation;
import './App.css';
import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Skills />
          <Projects />
          <Contact />
        </BrowserRouter>
      </div>
  );
}

export default App;

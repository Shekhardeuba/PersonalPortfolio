import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
// import About from './Screens/Aboutme/Aboutme';
import Projects from './Screens/Projects/Projects';
import Experience from './Screens/Experience/Experience';
import Contact from './Screens/Contacts/Contacts';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;

import './App.css';
import React from 'react';
import AboutMe from './components/About-me';
import PopularProjects from './components/Popular-projects';
import SocialMedia from './components/Social-media'; 

function App() {
  return (
      <div>
        <AboutMe/>
        <PopularProjects/>
        <SocialMedia/>
      </div>
  ); 
}
export default App;
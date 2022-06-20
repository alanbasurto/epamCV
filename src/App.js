import React, { useEffect,useState } from 'react';
import Heading from './components/Heading'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Languages from './components/Languages'
import Hoobies from './components/Hoobies'
import './App.css'

const App = () => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
      fetch('http://localhost:2000')                                                  //https://rickandmortyapi.com/api/character/2
      .then(response => response.json())
      .then(datas => setData(datas))
      
    

  },[]);
  if(data){
    const {heading,about,education,experience,skills,languages,hoobies,photo} = data
    return (
      <div>
        <Heading {...heading} photo={photo}/>
        <About about={about} />
        <Education education={education} />
        <Experience experience={experience} />
        <Skills skills={skills} />
        <Languages languages={languages} />
        <Hoobies hoobies={hoobies} />
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import { Me } from './Me/Me';
import { Work } from './Work/Work';
import { SectionWrapper } from './Shared/Styles';
import { Projects } from './Projects/Projects';

function App() {
  return (
    <div className="App">
      <SectionWrapper>
        <Me/>
        <Work/>
        <Projects/>
      </SectionWrapper>
    </div>
  );
}

export default App;

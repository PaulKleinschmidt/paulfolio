import React from 'react';
import './App.css';
import { Me } from './Me/Me';
import { Divider } from './Me/styles';
import { Work } from './Work/Work';
import { Projects } from './Projects/Projects';
import { SectionWrapper } from './Shared/Styles';

function App() {
  return (
    <div className="App">
      <SectionWrapper width="45%">
        <Me/>
      </SectionWrapper>
      <Divider/>
      <SectionWrapper width="55%">
        <Work/>
        <Projects/>
      </SectionWrapper>
    </div>
  );
}

export default App;

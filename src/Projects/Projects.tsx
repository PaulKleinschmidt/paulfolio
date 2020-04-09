import React from 'react';
import { Section, Box } from '../Shared/Styles';
import { Header, ProjectName, ProjectDescription, ProjectImage, IconLink } from './styles';
import sqnce from '../sqnce.gif';
import chicken from '../chicken.png';
import baba from '../baba.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const projects = [
  {
    name: "SQNCE",
    description: "SQNCE is a beat sequencer made with React and a <a href=https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API>Web Audio</a> framework called ToneJS. Click on the squares to make beats in your browser. Works best on Chrome.",
    github: "https://github.com/PaulKleinschmidt/react-beat-sequencer",
    deployedSite: "https://paulkleinschmidt.github.io/react-beat-sequencer/",
    imgSrc: sqnce
  },
  {
    name: "Stardew Scrape",
    description: "Stardew Scrape is a command line tool that allows you to do quick lookups of Stardew Valley character gift reactions. This was my first project utilizing web scraping and the Beautiful Soup Python library.",
    github: "https://github.com/PaulKleinschmidt/stardew-scrape",
    imgSrc: chicken
  },
  {
    name: "babaBlog",
    description: "babaBlog is a simple blog made with Ruby on Rails and Ember.js. The app was deployed with Heroku. This project was made during my time at General Assembly's Web Development Immersive coding bootcamp. Create a post or write a comment!",
    github: "https://github.com/PaulKleinschmidt/babablog-api",
    deployedSite: "https://paulkleinschmidt.github.io/babablog/#/posts/2",
    imgSrc: baba,
  },
]

export const Projects = () => {
  return (
    <Section >
      <Header>
        PROJECTS
      </Header>
      {projects.map(project => (
        <Box color="#34c749" key={project.name}>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div style={{width: "70%"}}>
              <ProjectName>
                {project.name}
              </ProjectName>
              <ProjectDescription dangerouslySetInnerHTML={{ __html: project.description }}/>
            </div>
            {project.imgSrc && <ProjectImage src={project.imgSrc} />}
          </div>
          <IconLink spacingRight="20px" color="#34c749" href={project.github}>
            <FontAwesomeIcon size="lg" icon={faCode} />
          </IconLink>

          {project.deployedSite && (
            <IconLink color="#34c749" href={project.deployedSite}>
              <FontAwesomeIcon size="lg" icon={faExternalLinkAlt} />
            </IconLink>
          )}
        </Box>
      ))}
    </Section>
  );
}



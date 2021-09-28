import React from 'react';
import { Section, Box } from '../Shared/Styles';
import { Header, ProjectName, ProjectDescription, ProjectImage, IconLink } from './styles';
import sqnce from '../sqnce.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../theme';

const projects = [
  {
    name: "SQNCE",
    description: "SQNCE is a beat sequencer made with React and a <a href=https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API>Web Audio</a> framework called ToneJS. Click on the squares to make beats in your browser. Works best on Chrome.",
    github: "https://github.com/PaulKleinschmidt/react-beat-sequencer",
    deployedSite: "https://paulkleinschmidt.github.io/react-beat-sequencer/",
    imgSrc: sqnce
  }
]

export const Projects = () => {
  return (
    <Section>
      <Header>
        SIDE PROJECTS
      </Header>
      {projects.map(project => (
        <Box color={colors.orange} key={project.name}>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div style={{width: "70%"}}>
              <ProjectName>
                {project.name}
              </ProjectName>
              <ProjectDescription dangerouslySetInnerHTML={{ __html: project.description }}/>
            </div>
            {project.imgSrc && <ProjectImage src={project.imgSrc} />}
          </div>
          <IconLink spacingRight="20px" color={colors.orange} href={project.github}>
            <FontAwesomeIcon size="sm" icon={faCode} />
          </IconLink>

          {project.deployedSite && (
            <IconLink color={colors.orange} href={project.deployedSite}>
              <FontAwesomeIcon size="sm" icon={faExternalLinkAlt} />
            </IconLink>
          )}
        </Box>
      ))}
    </Section>
  );
}



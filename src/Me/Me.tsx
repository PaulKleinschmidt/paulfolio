import React from 'react';
import { MyName, MyJob, About, Hi, Icons } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Section } from '../Shared/Styles';
import { IconLink } from '../Projects/styles';

export const Me = () => {
  return (
    <Section>
      <MyName>PAUL KLEINSCHMIDT</MyName>
      <MyJob>Software Engineer</MyJob>
      <About>
      <Hi>Hi</Hi>
        Welcome to my website! I'm software engineer a depth of experience creating user experiences. I write code with a focus on usability, scalability, and quality. In my free time, I enjoy creating electronic music and learning jazz songs on guitar. I am always interested in side projects and collaborations. Feel free to reach out if you would like to talk about code and/or music.
      </About>
      <Icons>
      <IconLink color="white" href="https://www.linkedin.com/in/paul-k/">
        <FontAwesomeIcon size="lg" icon={faLinkedinIn} />
      </IconLink>
      <IconLink color="white" href="https://www.github.com/paulkleinschmidt/">
        <FontAwesomeIcon size="lg" icon={faGithub} />
      </IconLink>
      <IconLink color="white" href="mailto:paul.kleinschmidt96@gmail.com">
        <FontAwesomeIcon size="lg" icon={faEnvelope} />
      </IconLink>
      <IconLink color="white" href="https://drive.google.com/file/d/1ujqcKvE0t3zKGssGrMpEI_Z9_UfBoQSs/view?usp=sharing">
        <FontAwesomeIcon size="lg" icon={faFileAlt} />
      </IconLink>
      </Icons>
    </Section>
  );
}


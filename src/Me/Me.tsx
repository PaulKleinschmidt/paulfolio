import React from 'react';
import { MyName, MyJob, About, Hi, Icons } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons'
import { Section } from '../Shared/Styles';
import { IconLink } from '../Projects/styles';
import { colors } from '../theme';

export const Me = () => {
  return (
    <Section>
      <MyName>PAUL KLEINSCHMIDT</MyName>
      <MyJob>Software Engineer</MyJob>
      <Icons>
        <IconLink color={colors.black} href="https://www.linkedin.com/in/paul-k/">
          <FontAwesomeIcon size="lg" icon={faLinkedinIn} />
        </IconLink>
        <IconLink color={colors.black} href="https://www.github.com/paulkleinschmidt/">
          <FontAwesomeIcon size="lg" icon={faGithub} />
        </IconLink>
        <IconLink color={colors.black} href="https://codepen.io/tall_paul">
          <FontAwesomeIcon size="lg" icon={faCodepen} />
        </IconLink>
        <IconLink color={colors.black} href="mailto:paul.kleinschmidt96@gmail.com">
          <FontAwesomeIcon size="lg" icon={faEnvelope} />
        </IconLink>
        <IconLink color={colors.black} href="https://drive.google.com/file/d/1ujqcKvE0t3zKGssGrMpEI_Z9_UfBoQSs/view?usp=sharing">
          <FontAwesomeIcon size="lg" icon={faFileAlt} />
        </IconLink>
      </Icons>

      <About>
        Welcome to my website! I'm a software engineer that enjoys creating unique and engaging user experiences. Lately I have been working mostly with React, Typescript, and Serverless, but I love learning new technologies. For example, I recently have been learning about functional programming. <br/><br/>
        I'm currently building embeddable widgets, dashboards, and tracking systems at Full Beaker. Before that, I worked as a full stack engineer at a health tech startup. <br/><br/>
        In my free time, I enjoy creating electronic music and playing jazz guitar. I am always interested in side projects and collaborations. Feel free to reach out if you would like to talk about code and/or music.
      </About>
    </Section>
  );
}


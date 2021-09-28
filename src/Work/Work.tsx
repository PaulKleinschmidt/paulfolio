import React, { useState } from 'react';
import { Section, Box, Link } from '../Shared/Styles';
import { Job } from './Job';
import {
  Header,
} from './Styles';

const jobs = [
  {
    name: 'Full Beaker',
    link: 'http://www.fullbeaker.com',
    position: 'Full Stack Engineer',
    timeline: 'Oct 2019 - Present',
    tech: 'React, Typescript, Redux, Serverless, Node, Express',
  },
  {
    name: 'Censinet',
    link: 'http://www.censinet.com',
    position: 'Software Engineer',
    timeline: 'Feb 2018 - Oct 2019',
    tech: 'React, Typescript, Redux, Ruby on Rails',
  },
];

export const Work = () => (
  <Section>
    <Header>WORK</Header>
    {jobs.map((job) => (
      <Job job={job} />
    ))}
  </Section>
);

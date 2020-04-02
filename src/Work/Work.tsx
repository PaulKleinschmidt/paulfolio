import React from 'react';
import { Section, Box, Link } from '../Shared/Styles';
import { Header, JobName, JobTimeline, JobHeader, Tech, Position } from './Styles';

const jobs = [
  {
    name: "Full Beaker",
    link: "http://www.fullbeaker.com",
    position: "Frontend Engineer",
    timeline: "Oct 2019 - Present",
    tech: "React, Typescript, Redux, Serverless, Gatsby"
  },
  {
    name: "Censinet",
    link: "http://www.censinet.com",
    position: "Software Engineer",
    timeline: "Feb 2018 - Oct 2019",
    tech: "React, Typescript, Redux, Ruby on Rails, RSpec"
  },
]

export const Work = () => {
  return (
    <Section>
      <Header>
        WORK
      </Header>
      {jobs.map(job => (
        <Box color="#ffa500" key={job.name}>
          <JobHeader>
            <JobName>
              <Link href={job.link} color="#ffa500">{job.name}</Link>
            </JobName>
            <JobTimeline>
              {job.timeline}
            </JobTimeline>
          </JobHeader>
          <Position>
            {job.position}
          </Position>
          <Tech>
            <strong>Tech:</strong> {job.tech}
          </Tech>
        </Box>
      ))}
    </Section>
  );
}


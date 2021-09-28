import React, { useState } from 'react';
import { Box, Link } from '../Shared/Styles';
import {
  JobName,
  JobTimeline,
  JobHeader,
  Tech,
  Position,
  JobDescription
} from './Styles';
import { TJob } from './types';

type Props = {
  job: TJob;
};

export const Job = ({ job }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const expand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Box
      className={isExpanded ? 'expanded' : ''}
      color="#ffa500"
      key={job.name}
      onClick={expand}
    >
      <JobHeader>
        <JobName>
          <Link href={job.link} color="#ffa500">
            {job.name}
          </Link>
        </JobName>
        <JobTimeline>{job.timeline}</JobTimeline>
      </JobHeader>
      <Position>{job.position}</Position>
      <Tech>
        <strong>Tech:</strong> {job.tech}
      </Tech>
    </Box>
  );
};

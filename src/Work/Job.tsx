import React, { useState } from 'react';
import { Box, Link } from '../Shared/Styles';
import { colors } from '../theme';
import {
  JobName,
  JobTimeline,
  JobHeader,
  Tech,
  Position
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
      color={colors.orange}
      key={job.name}
      onClick={expand}
    >
      <JobHeader>
        <JobName>
          <Link href={job.link} color={colors.orange}>
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

import React, { FunctionComponent } from 'react';
import { Job } from '../../common/types';
import JobDetails from './JobDetails';

interface IListJob {
  jobs: Array<Job> | undefined;
}

const ListJobs: FunctionComponent<IListJob> = ({ jobs }: IListJob) => {
  return <div>{jobs && jobs.map((job, i) => <JobDetails key={i} job={job} />)}</div>;
};

export default ListJobs;

import React from 'react';

const getTime = (date: string) => {
  return new Date(date).toISOString().substring(11, 16);
};

const JobTile = ({ job }: any) => {
  return (
    <div className="q3__job_tile" key={job.id}>
      <div>
        <span className="q3__job_name">{job.name}</span>
        <span className="q3__job_id">(Job #{job.id})</span>
      </div>
      <div className="q3__job_location">{job.location}</div>
      <div className="q3__job_date">{new Date(job.start).toDateString()}</div>
      <div className="q3__job_time">
        {getTime(job.start)} - {getTime(job.end)}
      </div>
    </div>
  );
};

export default JobTile;

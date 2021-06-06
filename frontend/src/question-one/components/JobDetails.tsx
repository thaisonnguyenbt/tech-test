import React from 'react';

const JobDetails = ({ job }: any) => {
  return (
    <div style={{ margin: '20px auto' }}>
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>{job.name}</td>
          </tr>
          <tr>
            <td>Start:</td>
            <td>{new Date(job.start).toDateString()}</td>
          </tr>
          <tr>
            <td>End:</td>
            <td>{new Date(job.end).toDateString()}</td>
          </tr>
          <tr>
            <td>Contact:</td>
            <td>{job.contact && job.contact.name}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default JobDetails;

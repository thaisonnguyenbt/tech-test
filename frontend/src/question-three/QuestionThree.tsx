import React, { useEffect, useState } from 'react';
import { IAppTabContainer } from '../common/types';

import { SectionGroup } from '../components/section/SectionGroup';
import { DataService } from '../service/DataService';
import Header from './components/Header';
import JobTile from './components/JobTile';

import './QuestionThree.css';

export const QuestionThree: React.FC<IAppTabContainer> = () => {
  const [jobs, setJobs] = useState<any>([]);

  useEffect(() => {
    const getJobsPromise = DataService.getJobs();
    const getJobAllocPromise = DataService.getJobAllocations();

    Promise.all([getJobsPromise, getJobAllocPromise]).then(([getJobsRes, getJobAllocRes]) => {
      // count job resources
      const jobAllocMap = new Map();
      getJobAllocRes.forEach((alloc) => {
        const count = jobAllocMap.get(alloc.jobId);
        if (count) {
          jobAllocMap.set(alloc.jobId, count + 1);
        } else {
          jobAllocMap.set(alloc.jobId, 1);
        }
      });

      //set count to jobs
      const tempJobs: any = [];
      getJobsRes.forEach((job) => {
        tempJobs.push({ ...job, resourcesCount: jobAllocMap.get(job.id) });
      });
      setJobs(tempJobs);
    });
  }, []);

  return (
    <SectionGroup>
      <div className="q3__container">
        <Header />
        <div className="q3__wrapper">
          <div className="q3__content">
            <div className="q3__left">
              <div className="q3__left_content">{jobs && jobs.map((job: any) => <JobTile job={job} />)}</div>
            </div>
            <div className="q3__right">
              <div className="q3__right_content">
                {jobs &&
                  jobs.map((job: any) => {
                    return <div key={job.id} className="q3__right_placeholder"></div>;
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionGroup>
  );
};

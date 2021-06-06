import React, { useEffect, useState } from 'react';
import { IAppTabContainer } from '../common/types';

import { SectionGroup } from '../components/section/SectionGroup';
import { DataService } from '../service/DataService';

interface ResourceSchedule {
  resourceName: string;
  resourceId: number;
  allocations: {
    allocType: 'job' | 'activity';
    name: string;
    start: string;
    end: string;
  }[];
}

export const QuestionTwo: React.FC<IAppTabContainer> = (props) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const getActivityAllocationsPromise = DataService.getActivityAllocations();
    const getJobAllocationsPromise = DataService.getJobAllocations();
    const getJobsPromise = DataService.getJobs();
    const getActivitiesPromise = DataService.getActivities();
    const getResourcesPromise = DataService.getResources();

    Promise.all([getActivityAllocationsPromise, getJobAllocationsPromise, getJobsPromise, getActivitiesPromise, getResourcesPromise]).then(([getActivityAllocationsRes, getJobAllocationsRes, getJobsRes, getActivitiesRes, getResourcesRes]) => {
      const jobsMap = new Map();
      getJobsRes.forEach((job) => {
        jobsMap.set(job.id, job);
      });

      const actinitiesMap = new Map();
      getActivitiesRes.forEach((activity) => {
        actinitiesMap.set(activity.id, activity);
      });

      const resourceMap = new Map();
      getResourcesRes.forEach((resource) => {
        resourceMap.set(resource.id, {
          resourceName: resource.name,
          resourceId: resource.id,
          allocations: [],
        });
      });

      getActivityAllocationsRes.forEach((activityAllocation) => {
        const resource = resourceMap.get(activityAllocation.resourceId);
        const activity = actinitiesMap.get(activityAllocation.activityId);
        resource.allocations.push({
          allocType: 'activity',
          name: activity.name,
          start: activity.start,
          end: activity.end,
        });
      });

      getJobAllocationsRes.forEach((jobAllocation) => {
        const resource = resourceMap.get(jobAllocation.resourceId);
        const job = jobsMap.get(jobAllocation.jobId);
        resource.allocations.push({
          allocType: 'job',
          name: job.name,
          start: job.start,
          end: job.end,
        });
      });

      const tempResources: any = [];
      resourceMap.forEach((item) => tempResources.push(item));
      setResources(tempResources);
    });
  }, []);

  return (
    <SectionGroup>
      <div>{JSON.stringify(resources)}</div>
    </SectionGroup>
  );
};

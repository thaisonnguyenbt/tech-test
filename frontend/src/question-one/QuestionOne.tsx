import React, { useEffect, useState } from 'react';
import { IAppTabContainer } from '../common/types';

import { SectionGroup } from '../components/section/SectionGroup';
import ListJobs from './components/ListJobs';

import './QuestionOne.css';
import useQuery from './hooks/useQuery';

export const QuestionOne: React.FC<IAppTabContainer> = () => {
  const [query, setQuery] = useState<string>('');
  const [tempQuery, setTempQuery] = useState<string>('');
  const { loading, error, data } = useQuery(query);

  // delay 400ms when using typing to prevent submitting too many requests to server
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (!tempQuery || tempQuery.length >= 3) {
        setQuery(tempQuery);
      }
    }, 400);
    return () => clearTimeout(timeOutId);
  }, [tempQuery]);

  return (
    <SectionGroup>
      <input type="text" onChange={(e) => setTempQuery(e.target.value)} />
      {error && <div>{error.message}</div>}
      {!error && loading && <div>Loading...</div>}
      {!error && !loading && data && <ListJobs jobs={data} />}
    </SectionGroup>
  );
};

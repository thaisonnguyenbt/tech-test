import { useEffect, useState } from 'react';
import { DataService } from '../../service/DataService';

const useQuery = (query: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await DataService.getJobsWithSearchTerm(query);
      if (!data) {
        setError({ message: 'Server returned null response.' });
        setData(null);
      } else {
        setError(null);
        setData(data);
      }
      setLoading(false);
    };

    fetchData();
  }, [query]);

  return { loading, error, data };
};

export default useQuery;

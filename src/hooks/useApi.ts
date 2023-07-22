import {useState} from 'react';
import axios from 'axios';
import {BASE_URL} from '../apiConfig';
import {
  GetReferralsResponse,
  HookReturnType,
  PostReferralsResponse,
  FormData,
} from '../interfaces/interfaces';

const useApi = (): HookReturnType => {
  const [data, setData] = useState<
    GetReferralsResponse | PostReferralsResponse | null
  >(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get<GetReferralsResponse>(
        `${BASE_URL}/referrals`,
        {
          headers: {
            Accept: 'application/json',
          },
        },
      );
      setData(response.data);
    } catch (error) {
      setData(null);
      setError('Error fetching data.');
    } finally {
      setLoading(false);
    }
  };

  const postData = async (formDataObj: FormData) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.post(`${BASE_URL}/referrals`, formDataObj, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setData(response.data);
    } catch (error) {
      setData(null);
      setError('Error sending data.');
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    fetchData,
    postData,
  };
};

export default useApi;

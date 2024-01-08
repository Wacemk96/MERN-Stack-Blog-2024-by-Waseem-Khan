import {useState} from 'react';
const apiURL = import.meta.env.VITE_API_URL;

const usePost = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const getPost = async (post_id) => {
    try {
      setLoading(true);
      const response = await fetch(`${apiURL}/api/posts/${post_id}`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
      const data = await response.json();

      setData(data);
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return {
    getPost,
    loading,
    error,
    data,
  };
};

export default usePost;

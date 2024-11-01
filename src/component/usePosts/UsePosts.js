import { useState, useEffect } from "react";

const usePosts = (url) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // To show a loading state
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null); // Reset error on new fetch attempt
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch posts.");

        const data = await response.json();
        setPosts(data); // Update posts data state
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // Set loading to false after fetch completed
      }
    };

    fetchPosts();
  }, [url]);

  return { posts, loading, error };
};

export default usePosts;

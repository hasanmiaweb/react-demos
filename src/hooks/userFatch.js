import { useEffect, useState } from "react";

const userFatch = (url, cb) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const result = await res.json();

      if (cb) {
        setData(cb(result));
      } else {
        setData(result);
      }
      setError("");
      
      setLoading(false);
    } catch (e) {
      setError("Server Error");
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
  };
};

export default userFatch;

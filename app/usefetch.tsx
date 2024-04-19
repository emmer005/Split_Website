import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setPending] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setError(null);
        setPending(false);
      })
      .catch((err) => {
        setError(err.message);
        setPending(false);
      });
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;

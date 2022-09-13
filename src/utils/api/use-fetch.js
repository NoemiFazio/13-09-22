import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setError(false);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });

    // (async function () {
    //   try {
    //     const res = await fetch(url).then((res) => res.json());
    //     setData(res);
    //     setError(false);
    //   } catch (e) {
    //     setError(err.message);
    //   } finally {
    //     setLoading(false);
    //   }
    // })();
  }, [url]);

  return { loading, data, error };
};

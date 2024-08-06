import { useState, useEffect, useCallback } from "react";
import { Quote } from "../types";

const useFetch = (fetchData: () => Promise<Quote>) => {
  const [data, setData] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetch = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchData();
      setData(result);
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error("An unknown error occurred")
      );
    } finally {
      setLoading(false);
    }
  }, [fetchData]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { data, loading, error, refetch: fetch };
};

export default useFetch;

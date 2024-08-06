import React, { useEffect, useState } from "react";
import Quote from "../src/components/Quote/Quote";
import Button from "../src/components/Button/Button";
import { getQuote } from "../src/services/quoteService";
import useFetch from "../src/hooks/useFetch";
import "../src/styles/globals.scss";
import "../src/styles/LoadingModule.scss";

const App: React.FC = () => {
  const { data, loading, error, refetch } = useFetch(getQuote);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loading) {
        setShowLoading(true);
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [loading]);

  if (loading) {
    return (
      <div className={"loadingContainer"}>
        <div className={"spinner"}></div>
        <div className={"loadingText"}>Loading...</div>
      </div>
    );
  }
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No quote available</div>;

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <Quote text={data.content} author={data.author} />
      <Button onClick={refetch} text="New Quote" />
    </div>
  );
};

export default App;

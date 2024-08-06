import React from "react";
import styles from "./Quote.module.scss";

interface QuoteProps {
  text: string;
  author: string;
}

const Quote: React.FC<QuoteProps> = ({ text, author }) => (
  <div className={styles.quoteContainer}>
    <p className={styles.quoteText}>"{text}"</p>
    <p className={styles.quoteAuthor}>- {author}</p>
  </div>
);

export default Quote;

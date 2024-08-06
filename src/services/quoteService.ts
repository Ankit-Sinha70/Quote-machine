import axios from "axios";
import { Quote } from "../types";

const QUOTE_API_URL = "https://api.quotable.io/random";

export const getQuote = async (): Promise<Quote> => {
  const response = await axios.get<Quote>(QUOTE_API_URL);
  return response.data;
};

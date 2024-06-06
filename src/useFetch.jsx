import { useDebugValue, useEffect, useState } from "react";
import db from "./db.json";
const useFetch = () => {
  const isOnline = false;
  const date = new Date();
  const [data, setData] = useState({});
  useEffect(() => {
    setData(db.data);
  }, []);

  useDebugValue(isOnline ? "online" : "offline");
  useDebugValue(date, (date) => date.toDateString());

  useDebugValue(data, (data) => JSON.stringify(data));
  return data;
};

export default useFetch;

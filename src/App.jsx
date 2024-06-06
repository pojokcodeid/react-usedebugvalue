import { useDebugValue, useEffect, useState } from "react";
import "./App.css";
import useFetch from "./useFetch";

function App() {
  const dt = useFetch();
  const [data, setData] = useState({});
  useEffect(() => {
    setData(dt);
  }, [dt]);

  useDebugValue("Contoh debug value tidak muncul ...");
  return (
    <>
      <ul>
        <li>{data.nama}</li>
        <li>{data.email}</li>
        <li>{data.tlp}</li>
      </ul>
    </>
  );
}

export default App;

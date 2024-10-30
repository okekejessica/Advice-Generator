import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import Advice from "./Advice";

function App() {
  const [advice, setAdvice] = useState({});
  const [loading, setLoading] = useState(true);

  const getAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip);
    setLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      getAdvice();
    }, 2000);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Advice advice={advice} getAdvice={getAdvice} loading={loading} />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

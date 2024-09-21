import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Logo from "./Components/Logo";
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-green-400">
        <h1>Hi</h1>
      </div>
    </>
  );
}

export default App;

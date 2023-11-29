import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyForm from "./assets/components/MyForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Form em React</h1>
      <MyForm userName="Fernando" userEmail="fernando@fernando.com" />
    </div>
  );
}

export default App;

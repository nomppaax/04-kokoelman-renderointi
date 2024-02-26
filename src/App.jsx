import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

const App = (props) => {
  const [value, setValue] = useState(10);

  const hello = (who) => {
    const handler = () => {
      console.log("hello", who);
    };
    return handler;
  };

  return (
    <div>
      {value}

      <button onClick={hello("world")}>button</button>
      <button onClick={hello("react")}>button</button>
      <button onClick={hello("function")}>button</button>
    </div>
  );
};
export default App;

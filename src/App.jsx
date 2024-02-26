import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

const App = (props) => {
  const [value, setValue] = useState(10);

  const handleClick = () => {
    console.log("clicked the button");
    setValue(0);
  };

  return (
    <div>
      {value}
      <button onClick={handleClick}>button</button>
    </div>
  );
};
export default App;

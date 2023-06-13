import Button from "@mui/material/Button";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function App() {
  const [color, setColor] = useState("primary");
  const handelClick = () => {
    setColor("secondary");
  };

  return (
    <div className="App">
      <h1>React MUI</h1>
      {/* <button>Click Me</button> */}
      {/* <Button color="secondary" variant="outlined">
        Click ME!
      </Button>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button> */}
      {/* <Button variant="contained" color={color} size="small" onClick={handelClick}>Outlined</Button> */}
      <Button
        variant="outlined"
        color={color}
        endIcon={<DeleteIcon />}
        onClick={handelClick}
      >
        Click Me
      </Button>
    </div>
  );
}

export default App;

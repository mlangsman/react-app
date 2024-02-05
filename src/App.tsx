import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";

import "./App.css";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const handleClick = () => {
    setShowAlert(true);
  };
  const items = ["New York", "London", "San Francisco", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      {showAlert && <Alert onClose={() => setShowAlert(false)}>Hello</Alert>}
      <Button buttonType="primary" onClick={handleClick}>
        Primary
      </Button>

      <ListGroup
        items={items}
        heading="Cities"
        onSelectedItem={handleSelectItem}
      />
      <Like
        onClick={() => {
          console.log("Like");
        }}
      />
    </div>
  );
}

export default App;

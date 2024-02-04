import ListGroup from "./components/ListGroup";
import { useState } from "react";
import Alert from "./components/Alert";
import Button, { ButtonType } from "./components/Button";

/*
function App() {
  const items = ["New York", "London", "San Francisco", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectedItem={handleSelectItem}
      />
    </div>
  );
}
*/

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const handleClick = (buttonType: ButtonType) => {
    setShowAlert(true);
    console.log(buttonType);
  };
  const items = ["New York", "London", "San Francisco", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      {showAlert && <Alert onClose={() => setShowAlert(false)}>Hello</Alert>}
      <Button buttonType={ButtonType.Primary} onButtonClick={handleClick}>
        Primary
      </Button>

      <ListGroup
        items={items}
        heading="Cities"
        onSelectedItem={handleSelectItem}
      />
    </div>
  );
}

export default App;

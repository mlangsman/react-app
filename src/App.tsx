//import ListGroup from "./components/ListGroup";

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
}*/

function App() {
  const handleClick = (buttonType: ButtonType) => {
    console.log(buttonType);
  };

  return (
    <div>
      <Alert>
        Hello <b>Biggedy boom!</b>
      </Alert>
      <Alert>
        Hello <b>bauf!</b>
      </Alert>
      <Button buttonType={ButtonType.Primary} onButtonClick={handleClick}>
        Primary
      </Button>
      <Button buttonType={ButtonType.Secondary} onButtonClick={handleClick}>
        Secondary
      </Button>
    </div>
  );
}

export default App;

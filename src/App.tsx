//import ListGroup from "./components/ListGroup";

import Alert from "./components/Alert";

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
  return (
    <div>
      <Alert>
        Hello <b>Biggedy boom!</b>
      </Alert>
    </div>
  );
}

export default App;

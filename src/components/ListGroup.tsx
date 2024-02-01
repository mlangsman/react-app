function ListGroup() {
  const items = ["new york", "London", "San Francisco"];

  items.map((item) => <li>{item}</li>);

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

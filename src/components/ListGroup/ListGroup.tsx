import { useState } from "react";
import styles from "./ListGroup.module.css";

interface Props {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectedItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getMessage = () => {
    return items.length === 0 && <p>No items found</p>;
  };

  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className={[styles.listGroup, styles.container].join(" ")}>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectedItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

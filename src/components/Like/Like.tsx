import { useState } from "react";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import styles from "./Like.module.css";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const clickHandler = () => {
    onClick();
    setIsSelected(!isSelected);
  };

  const [isSelected, setIsSelected] = useState(false);
  return (
    <div onClick={clickHandler}>
      {isSelected ? (
        <GoHeartFill className={styles.heartSelected} />
      ) : (
        <GoHeart />
      )}
    </div>
  );
};

export default Like;

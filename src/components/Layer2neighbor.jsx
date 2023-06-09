import { useContext } from "react";
import { DataContext } from "../context/context";

const Layer2neighbor = () => {
  const dataFromContext = useContext(DataContext);
  const { name } = dataFromContext;
  return <div>Layer2 neighbor data from context ={name.name} </div>;
};

export default Layer2neighbor;

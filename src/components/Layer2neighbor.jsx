import { useContext } from "react";
import { DataContext } from "../context/context";

const Layer2neighbor = () => {
  const dataFromContext = useContext(DataContext);
  const { name } = dataFromContext;
  return <div>
    <h2>Layer 2 Neighbor Component:  data from context = {name.name}</h2>  </div>;
};

export default Layer2neighbor;

import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../context/context";
const Layer4 = () => {
  const dataFromContext = useContext(DataContext);
  console.log(dataFromContext, "from layer4");
  const { data, setData } = dataFromContext;
  console.log(data, "from layer4");
  
  const [layerFourState, setLayerFourState] = useState({
    data: data
  });

  const handleSubmit = e => {
    e.preventDefault();
    setData(layerFourState)
  }

  return (
    <div>
      <h1>layer 4 will change the data</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setLayerFourState(e.target.value)} />
        <button>Submit!</button>
      </form>
    </div>
  );
};

export default Layer4;

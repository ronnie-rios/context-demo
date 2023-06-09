import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../context/context";
const Layer4 = () => {
  const dataFromContext = useContext(DataContext);
  const { name, setName } = dataFromContext;

  const [layerFourState, setLayerFourState] = useState(name);

  const handleSubmit = (e) => {
    e.preventDefault();
    //setName from the context file, overrides the global state, and will refresh with the updated
    setName({ ...name, name: layerFourState });
  };

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

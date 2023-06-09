import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../context/context";
const Layer4 = () => {
  const dataFromContext = useContext(DataContext);
  const { name, setName } = dataFromContext;

  const [layerFourState, setLayerFourState] = useState(name);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setName from the context file, overrides the global state, and updates the 'name' property with the value of 'layerFourState'
    setName({ ...name, name: layerFourState });
  };
  //it's an obj with the name property, and we are setting its key to this local state's input

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

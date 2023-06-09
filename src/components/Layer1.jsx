import { useContext } from "react";
import { DataContext } from "../context/context";
import Layer2 from "./Layer2";
import Layer2neighbor from "./Layer2neighbor";
import { useNavigate } from 'react-router-dom';

const Layer1 = () => {
  const dataFromContext = useContext(DataContext);
  const { name } = dataFromContext;
  const navigate = useNavigate()
  // console.log(name,  'from layer1');
  return (
    <div>
      Layer1 data from context = {name.name}
      <button onClick={()=>navigate('/layer3')}>Go to layer3</button>
      <Layer2 />
      <Layer2neighbor />
    </div>
  );
};

export default Layer1;

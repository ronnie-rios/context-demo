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
    <section>
      Layer1 data from context = {name.name}
      <div>
        <button onClick={()=>navigate('/layer3')}>Go to layer3</button>
      </div>
      <h3>Two components live on layer 2</h3>
      <Layer2neighbor />
      <Layer2 />
    </section>
  );
};

export default Layer1;

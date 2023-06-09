import { useContext } from "react";
import { DataContext } from "../context/context";
import { useNavigate } from 'react-router-dom';

const Layer3 = () => {
  const dataFromContext = useContext(DataContext);
  const { name } = dataFromContext;
  const navigate = useNavigate()
  return (
    <div>
      Different page still has access to the context = {name.name}
      <button onClick={()=>navigate('/')}>Go to back</button>

     
    </div>
  );
};

export default Layer3;

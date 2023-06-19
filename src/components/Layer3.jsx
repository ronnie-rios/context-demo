import { useContext } from "react";
import { DataContext } from "../context/context";
import { useNavigate } from "react-router-dom";

const Layer3 = () => {
  const dataFromContext = useContext(DataContext);
  const { name } = dataFromContext;
  const navigate = useNavigate();
  return (
    <div>
      <h2>Layer 3: data from context = {name.name}</h2> 
      <p>This layer still has access to the context since the DataProvider wraps around the entire component tree.</p>
      <div>
        <button onClick={() => navigate("/")}>Go to back</button>
      </div>
    </div>
  );
};

export default Layer3;

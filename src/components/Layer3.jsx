import { useContext } from "react";
import { DataContext } from "../context/context";
import { useNavigate } from "react-router-dom";

const Layer3 = () => {
  const dataFromContext = useContext(DataContext);
  const { name } = dataFromContext;
  const navigate = useNavigate();
  return (
    <div>
      Layer 3 is on a different page still has access to the context =
      {name.name}
      <div>
        <button onClick={() => navigate("/")}>Go to back</button>
      </div>
    </div>
  );
};

export default Layer3;

import { useContext } from "react";
import { DataContext } from "../context/context";
import Layer2 from "./Layer2";
import Layer2neighbor from "./Layer2neighbor";
import { useNavigate } from 'react-router-dom';

const Layer1 = () => {
  const dataFromContext = useContext(DataContext);
  
  const { name } = dataFromContext;
  console.log(name);
  const navigate = useNavigate()
 
  return (
    <section>
       <p>This is a guide to help developers learn more about global state and the Context API in React.</p>
          <p>To see the explanation, check out the <span className="text-sm text-gray-500 sm:text-center">
          <a
            href="https://github.com/ronnie-rios/context-demo"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            repository here.
          </a></span></p>
          <p>Each component is nested within another component. This is used to illustrate that with context, we can change the global state no matter where we are in the component tree.</p>
      <h2>Layer 1: data from context = {name.name}</h2> 
      <div>
        <button onClick={()=>navigate('/layer3')}>Go to a different page.</button>
      </div>
      <h3>Two components live on layer 2</h3>
      <Layer2neighbor />
      <Layer2 />
    </section>
  );
};

export default Layer1;

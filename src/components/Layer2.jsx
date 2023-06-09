import { useContext } from 'react'
import { DataContext } from '../context/context';

import Layer4 from './Layer4';

const Layer2 = () => {
  const dataFromContext = useContext(DataContext);
  const { name } = dataFromContext;
  return (
    <div>
      
      <p>Layer2 data from context = {name.name}</p>
        <Layer4 />
    </div>
  )
}

export default Layer2
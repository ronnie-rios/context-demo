import { useContext } from 'react'
import { DataContext } from '../context/context';
import Layer3 from './Layer3'

const Layer2 = () => {
    const dataFromContext = useContext(DataContext);
    console.log(dataFromContext, 'from layer2');
    const { data } = dataFromContext
    console.log(data, 'from layer2');
  return (
    <div>Layer2 data from context = {data}
        <Layer3 />
    </div>
  )
}

export default Layer2
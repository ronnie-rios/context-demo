import { useContext } from 'react'
import { DataContext } from '../context/context';
import Layer4 from './Layer4'

const Layer3 = () => {
    const dataFromContext = useContext(DataContext);
    console.log(dataFromContext, 'from layer2');
    const { data } = dataFromContext
    console.log(data, 'from layer2');
  return (
    <div>Layer3 data from context = {data}
        <Layer4 />
    </div>
  )
}

export default Layer3
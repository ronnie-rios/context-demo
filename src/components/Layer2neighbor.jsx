import { useContext } from 'react'
import { DataContext } from '../context/context';

const Layer2neighbor = () => {
    const dataFromContext = useContext(DataContext);
    console.log(dataFromContext, 'from layer2');
    const { data } = dataFromContext
    console.log(data, 'from layer2');
  return (
    <div>Layer2neighbor data from context = {data}</div>
  )
}

export default Layer2neighbor
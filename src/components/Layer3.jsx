import { useContext } from 'react'
import { DataContext } from '../context/context';
import Layer4 from './Layer4'

const Layer3 = () => {
   
  return (
    <div>Layer3 data from context = 
        <Layer4 />
    </div>
  )
}

export default Layer3
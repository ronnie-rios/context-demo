## useContext

- react context is a way to manage state globally, it can be used with the `useState` hook to share state between deeply nested components more easily than with `useState` alone
- state should be held by the highest parent component, in the stack that requires access to state
- child components and nested components can access data **without props**
- import `createContext`

### when to use?

- passing data that can be used in **any component in your application**
    - theme data
    - user data
    - location data
    - shopping cart
- **Data placed in context should not be updated often**

### how to use?

1. create context using the `createContext` method

```js
//CONTEXT FILE
import { createContext, useState } from "react";
//step 1
const DataContext = createContext({
    data: 'kangaroos'
})
```

2. Create a **PROVIDER**, it's a function that returns your `CONTEXT.PROVIDER`. put any value you like on your context provider using the `value` prop, make sure to wrap this `.PROVIDER` around the children

### example from this repo:
```js
//CONTEXT FILE
//pass in children destructured otherwise it would be props.children
function DataProvider({ children }) {
    const [data, setData] = useState({
        data: 'kangaroos'
    })
    //these are the values that will be fed to each of the components that are wrapped around the provider
    return (
        //call the context object you created, in this case its named DataContext
        <DataContext.Provider value={{
            //the state that we created in the component, we use this because we want it to update
            data: data, //state itself
            setData //setter function
        }}>
            {children} //all child components have access to it
        </DataContext.Provider>
    )
}
//export it out
export { DataContext, DataProvider }
```
3. take your created context and wrap the context provider around your component tree. this gives **ALL** the components and its children components, i.e. nested components will have access to the **GLOBAL STATE**

```js
import Layer1 from './components/Layer1'
import { DataProvider } from './context/context'

function App() {

  return (
    <>
    <DataProvider>
     <main>
      <h1>Hi this is a context </h1>
      <Layer1 />
     </main>
    </DataProvider>
    </>
  )
}
```

4. read that value within any component by using the ***the context hook***

```js
//import it
import { useContext } from 'react'
import { DataContext } from '../context/context';

//call the hook and pass in the DataContext, this is the context we created
const dataFromContext = useContext(DataContext);
//destructure the values from the provider, the state & setter
const { data, setData } = dataFromContext;

//use the data in the return like any other state value
return (
    <div>Layer1 data from context = {data}
        <Layer2 />
        <Layer2neighbor />
    </div>
)
```

***Note:***
- ***the data and variable names were written as generic as possible, feel free to name them around the data resource you would be using***
- ***the `console.log()` present on every `Layer` component are there to show as long as the component is a child of the `Context.Provider`, you will have access to global state.**
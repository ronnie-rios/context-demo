# useContext Hook and Global State

## About Context
- React context API is a way to manage state globally, it can be used with the `useState` hook to share state between deeply nested components more easily than with `useState` alone
- state should be held by the highest parent component, in the stack that requires access to state
- child components and nested components can access data **without props**, instead you can use the `useContext` hook and access the state object there. 
- import `createContext` to start using it.
- It's generally advised to make a separate folder and file that has this logic. a common naming convention is you will see is `<resource>Store.js`, or `<resource>Context.js`. 

### when to use?

- passing data that can be used in **any component in your application no matter where the component is in the component tree**
    - theme data
    - user data, i.e. a login token to keep track of authentication
    - location data
    - shopping cart
- **Data placed in context should not be updated often**

## Setting up context

### Step 1 - creating the context

1. create context using the `createContext` function, pass in the data you want to be used as global state. In this instance, we have an object that has the data we will be manpilating, the `name`, and an empty function, called `setName`. 

* Note: the reason for `setName: () => {}`, it's intially defined as an empty func in the context when created, but within the `DataProvider` we implement the a named function that will be set as the value to the `setName` func in the `Provider` we will create in the next step.

```js
//CONTEXT FILE
import { createContext, useState } from "react";
//step 1
const DataContext = createContext({
    //our default value = 'kangaroos'
    name: 'kangaroos',
    //our provider will have the updated value, in this case a func
    setName: () => {}
})
```
### Step 2 - creating the provider

2. Create a **PROVIDER**, it's a function that returns your `CONTEXT.PROVIDER`. put any value you like on your context provider using the `value` prop, make sure to wrap this `.PROVIDER` around the children

#### example from this repo:
```js
//CONTEXT FILE
//pass in children destructured otherwise it would be props.children
function DataProvider({ children }) {
    //since we want to override the initial context we created, we need state to override 
    const [data, setData] = useState({
        name: 'kangaroos'
    })
    //this is just a function that will take in the input value and will update the state data that lives within our DataProvider
     const updateName = (newData) => {
        setData(newData)
    }
    //these are the values that will be fed to each of the components that are wrapped around the provider
    return (
        //call the context object you created, in this case its named DataContext and then .Provider
        <DataContext.Provider value={{
            // `name` is the property in the context value, which will hold the value of `data`
            name: data, 
            // `setName` is the property in the context value, which will hold the reference to the `updateName` function
            setName: updateName //
        }}>
            {children} //all child components have access to it
        </DataContext.Provider>
    )
}
//export it out
export { DataContext, DataProvider }
```

### More info on the `DataContext.Provider`:

- The `name` property in the context value is used to hold the value of the data state.
- The `setName` property in the context value is used to hold the reference to the `updateName` function. This function can be used by child components to update the global state object.
- `children` refers to the child components that are wrapped within the `DataContext.Provider`. All child components will have access to the context and its values. We will see that in the next step.

## Step 3 - the provider in the App component

3. Take your created context and wrap the context provider around your component tree. this gives **ALL** the components and its children components, i.e. nested components will have access to the **GLOBAL STATE** Even if they are on different routes, the component as long as it's a child of the `<DataProvider>` component, will have access to the context.

```js
import Layer1 from './components/Layer1'
import { DataProvider } from './context/context'

function App() {
  return (
    <>
      <DataProvider>
        <main>
          <Routes>
            <Route path="/" element={<Layer1 />} />
            <Route path="/layer3" element={<Layer3 />} />
          </Routes>
        </main>
      </DataProvider>
    </>
  );
```
## Step 4 - using the context

4. Read that value within any component by using the ***the context hook***

```js
//import it
import { useContext } from 'react'
import { DataContext } from '../context/context';

//call the hook and pass in the DataContext, this is the context we created
  const dataFromContext = useContext(DataContext);
//destructure the values from the provider, the state & setter
const { name } = dataFromContext;

//use the data in the return like any other state value, in this case, it's a object of name with a property of name. Bad naming convention, sorry about that 
return (
    <div>Layer1 data from context = {name.name}
        <Layer2 />
        <Layer2neighbor />
    </div>
)
```

## Step 5 - updating the global state
- Import the context and `useContext` hook, we will also need the `useState` hook since our component will have an input

```js
import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../context/context";
```
- Instantiate the context.

```js
//context setup
const dataFromContext = useContext(DataContext);
const { name, setName } = dataFromContext;
//local state
const [layerFourState, setLayerFourState] = useState(name);
```

- create a function that that when submitted, will update the state
```js
  const handleSubmit = (e) => {
    e.preventDefault();
      // setName from the context file, overrides the global state, and updates the 'name' property with the value of 'layerFourState'
    setName({ ...name, name: layerFourState });
  };
```
- `setName` is the function obtained from the context file, which is used to override the global state.
- The `setName` function is called with a new object that spreads the existing name state and updates the `name` property with the value of `layerFourState`.
- By calling `setName`, the global state will be refreshed with the updated value of the `name` property.


##  Why the naming conventions? 
- the data and variable names were written as generic as possible in the `context.jsx` file, feel free to name them around the data resource you would be using.
-  The `Layer` components are named  to show you will have access to global state no matter where the component exists in the component tree.
- I don't have any rhyme or reason why I set the intial value to `kangaroos`. 

## Use this project
1. clone down this project to your machine
1. open your terminal
1. `cd` into the `context-demo`
1. run `npm i` or `npm install` once in the `context-demo` directory
1. to start the project `npm run dev`

## Technologies Used:
This React projected was created with Vite. [Vite Docs](https://vitejs.dev/)
- React - [React Docs](https://react.dev/)
- React-Router-Dom - [React Router Dom Docs](https://reactrouter.com/en/main)


## Questions? Comments?
If you have any questions, feedback, or suggestions, please feel free to reach out to me via email at ronniemarkrios@gmail.com. You can also open an issue on the project's repository on GitHub here.
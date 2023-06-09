/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const DataContext = createContext({
    name: 'kangaroos', 
    setName: () => {}
})
//default value
 //function that we call to update
function DataProvider({ children }) {
    const [data, setData] = useState({
        name: 'kangaroos'
    })

    const updateName = (newData) => {
        setData(newData)
    }

    return (
        <DataContext.Provider value={
            {
                name: data,
                setName: updateName
            }
        }>
            {children}
        </DataContext.Provider>
    )
}

export { DataContext, DataProvider }

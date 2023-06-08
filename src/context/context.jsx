/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const DataContext = createContext({
    data: 'kangaroos'
})

function DataProvider({ children }) {
    const [data, setData] = useState({
        data: 'kangaroos'
    })

    return (
        <DataContext.Provider value={{
            data: data,
            setData
        }}>
            {children}
        </DataContext.Provider>
    )
}

export { DataContext, DataProvider }
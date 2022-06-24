import { createContext, useContext, useState } from "react";


const ContextApp = createContext([])

export const useContextApp = () => useContext(ContextApp)


const ContextAppProvider = ({ children }) => {
    const [data, setData] = useState()

    function loadData(data) {
        setData(data)
    }
    return (
        <ContextApp.Provider value={{
            data,
            loadData
        }}>
            {children}
        </ContextApp.Provider>
    )
}


export default ContextAppProvider
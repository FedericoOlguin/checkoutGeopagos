import { createContext, useContext, useState } from "react";


const ContextApp = createContext([])

export const useContextApp = () => useContext(ContextApp)


const ContextAppProvider = ({ children }) => {
    const [data, setData] = useState()
    const [navColor, setNavColor] = useState(false)

    function loadData(data) {
        setData(data)
    }

    function updateNavColor() {
        setNavColor(window.location.href === "http://localhost:3000/error")
    }
    return (
        <ContextApp.Provider value={{
            data,
            navColor,
            loadData,
            updateNavColor
        }}>
            {children}
        </ContextApp.Provider>
    )
}


export default ContextAppProvider
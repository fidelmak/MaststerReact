import React, {createContext} from 'react'
export const GlobalContext = createContext()



function GlobalContextProvider(props){
    return(
        <GlobalContext.Provider value={"React jx"}>
            {props.children}
        </GlobalContext.Provider>
    )
    
}
export default GlobalContextProvider
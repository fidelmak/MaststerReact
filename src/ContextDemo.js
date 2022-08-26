import React from 'react'
import ContextDemo2 from './ContextDemo2'
import GlobalContextProvider from './GlobalContext'
const ContextDemo =()=>{
    return <>
    <GlobalContextProvider>
    <h1>
        <ContextDemo2  />
    </h1>
    </GlobalContextProvider>
    </>
}
export default ContextDemo
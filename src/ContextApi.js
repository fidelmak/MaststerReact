import React from 'react'
import ContextDemo from './ContextDemo'
import GlobalContextProvider from './GlobalContext'
const ContextApi =()=>{
    return <>
    <GlobalContextProvider>
    <h1>
        <ContextDemo />
    </h1>
    </GlobalContextProvider>
    </>
}
export default ContextApi
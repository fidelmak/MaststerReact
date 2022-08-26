import React,{ useState , createContext} from 'react'

export const LastProjectContextFile = createContext()

function LastProjectContextProvider(props){
    const [heros, setHeros] = useState([
        {name:"flash",comic:"DC"},
        {name:"ironMan",comic:"Marvel"}
    ])
    const addHero = (name, comic)=>{
        setHeros([...heros, {name, comic}])

    }
    return(
        <LastProjectContextFile.Provider value={{heros, addHero}}>
        {props.children}
        </LastProjectContextFile.Provider>
    )
}
export default LastProjectContextProvider
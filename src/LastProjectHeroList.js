import React, {useContext} from 'react' 
import { LastProjectContextFile  } from './LastProjectContextFile'
function LastProjectHeroList(){
    // const heros =[
    //     {name:"flash",comic:"DC"},
    //     {name:"ironMan",comic:"Marvel"}
    // ]
    const { heros } = useContext(LastProjectContextFile) 
    return heros.length ?(<div style={{backgroundColor:"crimson"}}>
        <h2 className='text-white p-2'>Below are the SuperHero lists </h2>
        {heros.map(hero=>(
            <div>
              <h4>SuperHero:{hero.name}</h4>
              <h4>Comic:{hero.comic}</h4> 
              <hr />   
            </div>
        ))}

    </div>):(
        <div>
            <h2>No superHeroes</h2>
        </div>
    )
}
export default LastProjectHeroList
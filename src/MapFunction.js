import React from 'react'


function MapFunction(){
    const names=['Jack','ben','stanley','micheal']
    return<>
    <h1>map function demo</h1>
    <h2>
        {
            names.map(name => <h4>{name}</h4>)
        }
    </h2>

    </>
}


export default MapFunction
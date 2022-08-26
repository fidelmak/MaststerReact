import React from 'react'

function BigFile(){
    const persons=[
        {
            id:1,
            name:"Jamea",
            age:28,

        },
        {
            id:2,
            name:"amea",
            age:18,

        },
        {
            id:3,
            name:"ben",
            age:56,

        },
        {
            id:4,
            name:"paul",
            age:24,

        },
        {
            id:5,
            name:"cynthia",
            age:20,

        }
    ]
    return <>
    <h2>contact details</h2>
    {
        persons.map(person=>( 
        <div key={person.id}>
            <h3>My name is <code>{person.name.toUpperCase()}</code> and my age is <i>{person.age}</i></h3>
        </div>

        ))
    }
    </>
}
export default BigFile
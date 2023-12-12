import React from 'react';
import Person from './Person';

function NameList() {
    const names= ['Bruce','Abinav', 'Swanap','clark']
    const persons = [
        {
            id: 1,
            name:'Bruce',
            age: 30 ,
            skill: 'React'
        },
        {
            id: 2,
            name:'Abinav',
            age: 25 ,
            skill: 'Angular'
        },
        {
            id: 3,
            name:'Swanap',
            age: 32 ,
            skill: 'mongoDB'
        },
    
    ]
    const nameList = names.map((name , index ) => <h2 key={index}>{index} {name}</h2>)
  return <div>{nameList}</div>
  
}

export default NameList;

import React from 'react';

function Columns() {
    //Fragment means prevent extra nodes creation into DOM
    // while using array in react fragments method
    //const items =[]
  return (
    // <React.Fragment>
    //     {
    //         items.map(item => (
    //             <React.Fragment key={item.id}>
    //                 <h1>Title</h1>
    //                 <p>{item.title}</p>
    //             </React.Fragment>    
    //         ))
    //     }
    //   <td>Name</td>
    //   <td>Gender</td>
    // </React.Fragment>
    <>
    <td>Name</td>
    <td>Gender</td>
    </>
  );
}

export default Columns;

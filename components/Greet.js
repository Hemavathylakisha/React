import React from "react";


// const Greet = (props) => {
//     console.log(props)
// return (
//     <div>
// <h1>Hello {props.name} a k a {props.value}</h1>
// {props.children}
// </div>
// )
// }

// restructuring props
const Greet = props => {
    const {name, value} =props
return (
    <div>
<h1>Hello {name} a k a {value}</h1>

</div>
)
}
export default Greet
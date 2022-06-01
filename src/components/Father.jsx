import React from "react";
 import Son from "./Son";

function childrenWithProps(props) {
    return React.Children.map(props.children, child => {
        return React.cloneElement(child, {
            ...props, ...child.props})
    })
}

 export default props => 
 <div>
     <h1>{props.name} {props.lastName}</h1>
     <h2>Sons</h2>
     <ul>
         {childrenWithProps(props)}
     </ul>
 </div>
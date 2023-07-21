import React , { useState } from "react";



function Todolist(props){


    let [isclick,setisclick]=useState(false)
function handleclick(){

setisclick(prevvalue=> {
    return !prevvalue
}
    )

}

    return (<div onClick={handleclick}>
    <li style={{textDecoration : isclick?"line-through":"none"}} >{props.todoitem}</li>
     </div>
    )
}

export default Todolist;
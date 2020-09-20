import React from 'react'
import ReactDom from 'react-dom'

// function TodoItem()
// {
//     return (
//         <div className='todo-items'>
//         <input type="checkbox" />
//             <p>PlaceHolder Text here</p>
//         </div>
//     )
// }

function TodoItem(props)
{
    //console.log(props.handleChange(props.item.id))

    const completedStyle={
        fontStyle:"italic",
        color:"#cdcdcd",
        textDecoration:"line-through"
    }
    return (
                <div className='todo-items'>
                <input type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id)}
                />
                    <p style={props.item.completed?completedStyle:null}>{props.item.text}</p>
                </div>
                
            )
}
export default TodoItem
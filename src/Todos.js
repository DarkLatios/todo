import React from 'react'
import ReactDom from 'react-dom'
import TodoItem from './Todoitems'
import todosData from './TodosData'

// function Todos()
// {
// const todoItems=todosData.map(item => <TodoItem key= {item.id} item={item} />)

//     return (
//         <div className='todo-list'>
//             {todoItems}
//         </div>
//     )
// }
// {/* <TodoItem />
//             <TodoItem />
//             <TodoItem />
//             <TodoItem /> */}


class Todos extends React.Component
{
    constructor()
    {
        super();
        this.state={
            firstname:"",
            lastName:"",
            loading:false,
            todos:todosData,
            character:{}
           
        }
        
        this.handleChange=this.handleChange.bind(this)
        this.handleChangeForm=this.handleChangeForm.bind(this)
        
    }
    componentDidMount()
    {
        this.setState({loading:true})
        fetch("https://swapi.dev/api/people/1")
            .then(response => response.json())
            .then(data => {
               
                this.setState({
                    loading:false,
                    character:data
                })
            })
            
        
    }

    handleChangeForm(event)
    {
        const {name,value}=event.target    //Method 3 To get value from a form
        this.setState({
            // firstname:event.target.value//  Method 1
            //[event.target.name]:event.target.value // Method 2
            [name]: value
        })
    }

    handleChange(id)
    {
        this.setState(prevState =>{
            const updatedTodo=prevState.todos.map(todo =>{
                if(todo.id===id)
                {
                    todo.completed=!todo.completed
                }
                return todo
            })
            return{
                todos:updatedTodo
            }
        })
        console.log("Changed",id)
    }

    render(){
        const todoItems=this.state.todos.map(item => <TodoItem key= {item.id} item={item} handleChange={this.handleChange}/>)
        const text=this.state.loading?"loading...":this.state.character.name
        return (
            <div className='todo-list'>
                {todoItems}
                <h1>Name is</h1>
                <p> {text}</p> 

                <form>
                    
                    <input type="text" name="firstname" value={this.state.firstname} placeholder="First Name" onChange={this.handleChangeForm} /> 
                    <br />
                    {/* name in form should be same as stateValue */}
                   
                   
                    <input type="text" name="lastName"  value={this.state.lastName} placeholder="Last Name" onChange={this.handleChangeForm} /> 
                  
                    
                          <p>{this.state.firstname} {this.state.lastName}</p>
                </form>
            </div>
            
    )

    }
}


export default Todos
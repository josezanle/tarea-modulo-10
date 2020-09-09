import React, { useReducer, useEffect } from 'react'
import { todoReducer } from './todoReducer';


import '../08-useReducer/styles.css'
import { UseForm } from '../../hooks/UseForm';
import TodoList from './TodoList';

const init = ()=>{
return JSON.parse(localStorage.getItem('todos')) || [];

    // return [{
    //         id: new Date().getTime(),
    //         description:'aprender react',
    //         done:false
    //     }]
        
}



export const TodoApp =() => {

const [todos,dispatch] = useReducer(todoReducer,[],init);





const handleSubmit = (e) => {
e.preventDefault();

if(description.trim().length <= 1){
    return;
}

const newTodo = {
    id: new Date().getTime(),
    description,
    done:false
}
const action = {
    type:'add',
    payload:newTodo

}
    dispatch (action);
    reset();
}



const [{description},handleInputChange,reset] = UseForm({
    description:'',

})

useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos))
}, [todos]);

const handleDelete = (todoId) => {

const action = {
    type:'delete',
    payload: todoId
}

dispatch (action);

}
const handleToggle = (todoId) => {
  const action ={
      type:'toggle',
      payload:todoId
  }

  dispatch(action);
}
    return (
        <div className="container">

        <h1>TodoApp({todos.length})</h1>

            <hr/>
                <div className="row">
                    <div className="col-7">
                        <TodoList 
                            todos={todos}
                            handleDelete={handleDelete}
                            handleToggle={handleToggle}              
                        />
                    </div>

                    <div className="col-5">
                    <h4>Agregar</h4>
                    <hr/>

                    <form onSubmit={handleSubmit}>


                        <input 
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Escribe una tarea"
                            autoComplete="off"
                            value={description}
                            onChange={handleInputChange}
                        />

                        <button className="btn btn-outline-primary mt-1 btn-block"
                        type="submit"
                        
                        >
                            Agregar
                        </button>
                    </form>


                    </div>

                </div>


        </div>
    )
}

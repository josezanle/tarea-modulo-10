import React from 'react'
import TodoListItem from './TodoListItem'

function TodoList({todos,handleDelete,handleToggle}) {
    return (
        <div>
            <ul className="list-group list-group-flush">
                {
                    todos.map( (todo,i)=>(
                   <TodoListItem 
                   key={todo.id}
                   todo={todo}
                   index={i}
                   handleDelete={handleDelete}
                   handleToggle={handleToggle}
                   />
                                ))
                }
            </ul>
        </div>
    )
}

TodoList.propTypes = {

}

export default TodoList


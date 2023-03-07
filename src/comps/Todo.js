import React, { useState } from 'react'
import Todoform from './Todoform'
import {MdClose} from 'react-icons/md'
import {MdOutlineEdit} from 'react-icons/md'
 
function Todo({todos, completeTodo, removeTodo, updateTodo}) {
    const [edit, setEdit] = useState({
        id:null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <Todoform edit = {edit} onSubmit = {submitUpdate} />;
    }

  return todos.map((todo, index) => (
    <div 
    className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
    key={index}  
    >
        <div key={todo.id} onClick={() => completeTodo(todo.id)} style = {{userSelect: "none"}} >
            {todo.text}
        </div>
        <div className="icons">
            <MdClose 
            onClick={() => removeTodo(todo.id)} 
            className = 'delete'
            />
            <MdOutlineEdit 
            onClick={() => setEdit({id: todo.id, value: todo.text})} 
            className = 'edit'
            />
        </div>
    </div>
    ))
}

export default Todo;
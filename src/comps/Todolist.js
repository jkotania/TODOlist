import React, { useState } from 'react'
import Todoform from './Todoform'
import Todo from './Todo';
import Footer from './footer';

function Todolist() {
    const [todos, setTodos] = useState([]);
    
//Nie zachodzi korelacja w momencie wpisania danych ze spacją. 
//Po prostu wszystko pasuje.
    const addtd = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }

        const newtds = [todo, ...todos]

        setTodos(newtds);
    };
    
    const updateTodo = (todoId, newValue) =>{
    if(!newValue.text || /^\s*$/.test(newValue.text)){
        return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ?  newValue : item)))
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    };
	
    const completeTodo = id => {
        let updatedTodos = todos.map (todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo
        });
        setTodos(updatedTodos);
    };

  return (
    <div>
      <h1>What do you want TODO?</h1>
      <div className='line'></div>
      <Todoform onSubmit = {addtd} />
      <Todo
      todos={todos} completeTodo = {completeTodo} removeTodo = {removeTodo}
      updateTodo = {updateTodo} 
      /> 
      <Footer/>
    </div>
  );
}

export default Todolist;

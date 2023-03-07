import userEvent from '@testing-library/user-event';
import React, { useState, useEffect, useRef } from 'react';

function Todoform(props) {
    const [input, setInput] = useState('');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const tdChange = e =>{
        setInput(e.target.value);
    }

    const tdSubmit = e => {
        e.preventDefault();
        //W konsole wpisuje id z granicy 1-10000, 
        //dodając text który jest wpisany w input.
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })

        setInput('');
    };

  return (
    <form onSubmit={tdSubmit} className='tdform'>
    {props.edit ? (
      <>
        <input
          placeholder='Update your item'
          value={input}
          onChange={tdChange}
          name='text'
          ref={inputRef}
          className='tdinput edit'
        />
        <button onClick={tdSubmit}  className='tdbutton edit'>
          Update
        </button>
      </>
    ) : (
      <>
        <input
          placeholder='Add TODO'
          value={input}
          onChange={tdChange}
          name='text'
          className='tdinput'
          ref={inputRef}
        />
        <button onClick={tdSubmit} className='tdbutton'>
          ADD TODO
        </button>
      </>
    )}
  </form>
  );
}

export default Todoform;
import React, {useState} from 'react'
import './Input.scss'

export default function Input({ setTodo }) {
    const [input, setInput] = useState('');
    const uniqueId = function(){
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
    

    function handleAdd(e) {
        if (e.key === 'Enter' && e.target.value) {
            setTodo(prev => [...prev, { id: uniqueId(), value: e.target.value, completed: false, deleted: false }])
            setInput('');
        }
    }
    return (

        <input className='user-input' value={input} type="text"
            placeholder='type here and hit enter'
            onKeyDown={(e) => handleAdd(e)}
            onInput={(e) => setInput(e.target.value)} />

    )
}

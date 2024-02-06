import React, { useState } from 'react'
import './Checkbox.scss'

export default function Checkbox({ addedItem, setTodo }) {
    const label = addedItem.value
    const id = addedItem.id
    const isCompleted = addedItem.completed
    const isDeleted = addedItem.deleted

    const [showDelete, setShowDelete] = useState(false);
    const [isRemoved, setIsRemoved] = useState(false)

    const handleComplete = () => {
        setTodo(prev => {
            const newState = prev.map(obj => {
                return (obj.id === id) ? { ...obj, completed: !obj.completed } : obj;
            });
            return newState;
        });
    };

    const handleDelete = () => {
        setTodo(prev => {
            const newState = prev.map(obj => {
                return (obj.id === id) ? { ...obj, deleted: true } : obj;
            });
            return newState;
        });
        // Use setTimeout with dynamically set delay duration
        setTimeout(() => {
            setIsRemoved(true)
        }, 500);
    };

    return (

        <div
            className={isRemoved ? 'checkbox removed' : isDeleted ? 'checkbox deleted' : isCompleted ? 'checkbox completed' : 'checkbox'}
            onMouseOver={() => { setShowDelete(true) }}
            onMouseOut={() => { setShowDelete(false) }}>
            <label
                className={'item'}
            >
                <input type="checkbox" onChange={handleComplete} />
                <span>{label}</span>
            </label >
            {showDelete && <span className="remove-button" onClick={handleDelete}></span>}
        </div>
    )
}

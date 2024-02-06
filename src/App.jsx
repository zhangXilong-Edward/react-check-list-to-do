import { useState } from 'react'
import './App.scss'
import Checkbox from './components/Checkbox';
import Input from './components/Input';

function App() {

  const [todo, setTodo] = useState([]);
  console.log(todo)

  const itemEls = todo.map((e, index) => {
    return  (<Checkbox key={index}
      addedItem={e}
      setTodo={setTodo}
      todo={todo} />) 
  })

  return (
    <>
      <div className='app'>
        <div className='container'>
          <div className='title'>Check List</div>
          {itemEls}
          <Input
            setTodo={setTodo}
          />
        </div>
      </div>
    </>
  )
}

export default App

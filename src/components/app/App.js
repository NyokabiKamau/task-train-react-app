import Header from '../header/header';
import TodoCard from '../todo-card/todo-card';
import TodoForm from '../task-form/todo-form';
import './App.css';
import { useEffect ,useState } from 'react';

function App() {
  const [todos, setTodos] = useState([])

  const TODOS = 'https://api.npoint.io/8d81cb7e13e594ae367a'

  useEffect(() => {
    fetch(TODOS)
    .then(r => r.json())
    .then(data => {
      setTodos(data.data)
      console.log((data.data))
    })
  }, [])

  function handleAddTodo(newTodo){
    setTodos(item => [...item, newTodo])
  }

  
  const list = todos.map((todo) => {
    return (
    <TodoCard 
    key={todo.id}
    title={todo.title}
    description={todo.description}
    status={todo.status}
    priority={todo.priority}
    />
  )})

  return (
    <div className="App">
      <Header/>
      <TodoForm onAddTodo={handleAddTodo}/>
      {list}
    </div>
  );
}

export default App;

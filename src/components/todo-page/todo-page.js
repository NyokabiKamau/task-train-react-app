import TodoCard from '../todo-card/todo-card';
import TodoForm from '../task-form/todo-form';
import { useEffect ,useState } from 'react';

function TodoPage() {
  const [todos, setTodos] = useState([])

  const TODOS = 'https://api.npoint.io/8d81cb7e13e594ae367a'

  useEffect(() => {
    fetch(TODOS)
    .then(r => r.json())
    .then(data => {
      setTodos(data)
      console.log((data))
    })
  }, [])

  function handleAddTodo(newTodo){
    setTodos(item => [...item, newTodo])
  }

    function updateTodo(todo) {
        setTodos((items) =>
          items.map((data) => {
            return data.id === todo.id ? todo : data;
          })
        );
    }

    function deleteTodo(id) {
        setTodos((data) => data.filter((item) => item.id !== id))
    }

  const list = todos.map((todo) => (
    <TodoCard 
    key={todo.id}
    title={todo.title}
    description={todo.description}
    status={todo.status}
    priority={todo.priority}
    deleteTodo={deleteTodo}
    updateTodo={updateTodo}
    />
  ))

  return (
    <div className="App">
      <TodoForm onAddTodo={handleAddTodo}/>
      {list}
    </div>
  );
}

export default TodoPage;

import Header from '../header/header';
import { Routes, Route} from 'react-router-dom';
import Login from '../login/login';
import './App.css';
import {useState } from 'react';
import TodoPage from '../todo-page/todo-page';

function App() {
  const [token, setToken] = useState([])
  
  if (!token) {
    return <Login setToken={setToken}/>
  }

  function handleLogout() {
    setToken(null)
  }
  return (
    <div className="App">
      <Header token={token} onLogout={handleLogout}/>
      <main>
        <Routes>
          <Route exact path="/todos" element={<TodoPage/>} />
          <Route path="/login" exact element={<Login />} />
        </Routes>

      </main>
    </div>
  );
}

export default App;

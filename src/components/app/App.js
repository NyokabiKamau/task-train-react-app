import Header from '../header/header';
import TaskCard from '../task-card/task-card';
import TaskForm from '../task-form/task-form';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <TaskForm/>
      <TaskCard/>
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import './general.css'
import Header from './components/header/Header'
import TodoList from './components/todoList/TodoLIst'
import NoTodo from './components/noTodo/NoTodo';

export default function App() {
  const [todo, setTodo] = useState(() => {
    let todoList = JSON.parse(localStorage.getItem('todo'));
    if (!todoList) {
      localStorage.setItem('todo', '[]');
      todoList = [];
    } 
    return todoList;
  });

  const [done, setDone] = useState(() => {
    let done = JSON.parse(localStorage.getItem('done'));
    if (!done) {
      localStorage.setItem('done', '[]');
      done = [];
    } 
    return done;
  });

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo));
  }, [todo])
  
  useEffect(() => {
    localStorage.setItem('done', JSON.stringify(done));
  }, [done])

  return (
    <div className="App">
      <div className='container'>
        <div className='App__container__special-box'>
          <Header setTodo={setTodo}/>
          {
            todo.length > 0 ?
            <TodoList setDone={setDone} setTodo={setTodo} isDoneList={false} list={todo}/> :
            <NoTodo message={'create your first todo task!'}/>
          }
          <hr />
          {
            done.length > 0 ?
            <TodoList setDone={setDone} setTodo={setTodo} isDoneList={true} list={done}/> :
            <NoTodo message={'no have done todo'}/>
          }
        </div>
      </div>
    </div>
  );
}


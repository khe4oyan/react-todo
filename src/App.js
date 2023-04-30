import './general.css'
import Header from './components/header/Header'
import TodoList from './components/todoList/TodoLIst'
import Footer from './components/footer/Footer';
import { useState } from 'react';

const backEnd_todo = [
  'Create first react app',
  'Upload in github',
  'Create public page',
  'Make video',
];

const backEnd_done = [
  'Download Todo Sample',
  'Drink'
];

export default function App() {
  const [todo, setTodo] = useState(backEnd_todo ?? []);
  const [done, setDone] = useState(backEnd_done ?? []);

  return (
    <div className="App">
      <div className='container'>
        <div className='App__container__special-box'>
          <Header setTodo={setTodo}/>
          {
            todo.length > 0 ?
            <TodoList setDone={setDone} setTodo={setTodo} isDoneList={false} list={todo}/> :
            <NoTodo message={'create your firts todo task!'}/>
          }
          <hr />
          {
            done.length > 0 ?
            <TodoList setDone={setDone} setTodo={setTodo} isDoneList={true} list={done}/> :
            <NoTodo message={'no have done todo'}/>
          }
        </div>
        <Footer />
      </div>
    </div>
  );
}

function NoTodo({message}) {
  return (
    <p className='noTodo'>
      ({message})
    </p>
  );
}
import './NoTodo.css';

export default function NoTodo({ message }) {
  return (
    <p className='noTodo'>
      ({ message })
    </p>
  );
}
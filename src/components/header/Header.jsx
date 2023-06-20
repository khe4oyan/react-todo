import { useEffect, useState } from 'react';
import './header.css'

export default function Header({setTodo}) {
	const [value, setValue] = useState('');

	const change = function(value) {
		setTodo(function(prev) {
			return [...prev, value];
		});
	}

	useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
				change(value);
				setValue('');
      }
    }
    window.addEventListener('keydown', handleKeyPress);
    return () => {
			window.removeEventListener('keydown', handleKeyPress);
    };
  }, [value]);

	return (
		<header className='center container'>
			<div className='header__box'>
				<input onChange={(e) => {setValue(e.target.value); }} type="text" placeholder="Add a task.." value={value}/>
				<button onClick={() => {change(value); setValue('')}}>add</button>
			</div>
		</header>
	);
}
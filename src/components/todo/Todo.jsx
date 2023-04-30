import { BiCheckbox, BiCheckboxChecked } from "react-icons/bi";
import './todo.css'

export default function Todo({isDone = false, todoText, setTodo, setDone, index}) {

	const deleteTodo = () => {
		if (isDone) {
			setDone(function(prev) {
				return prev.filter((text) => {
					return text != todoText
				});
			});
		} else {
			setTodo(function(prev) {
				return prev.filter((text) => {
					return text != todoText;
				});
			});
		}
	}

	const toggleTodo = () => {
		deleteTodo();

		if (isDone) {
			setTodo((prev => {return [...prev, todoText]}));
		} else {
			setDone((prev => {return [...prev, todoText]}));
		}
	}

	return (
		<div className="todo">
			<p className={`todo__text ${isDone ? 'done' : ''}`} onClick={toggleTodo}>
				{isDone ? 
					<BiCheckboxChecked className="todo__checkbox" /> : 
					<BiCheckbox className="todo__checkbox" /> }
				<span>{todoText}</span>
			</p>
			<div className="todo__buttons">
				<button className="todo__toggle-btn" onClick={toggleTodo}>{isDone ? 'undone' : 'done'}</button>
				<button className="todo__delete-btn" onClick={deleteTodo}>delete</button>
			</div>
		</div>
	);
}
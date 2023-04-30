import Todo from '../todo/Todo'

export default function TodoList({setTodo, setDone, isDoneList, list=[]}) {
	return (
		<div className="todoList">
			{
				list.map((todo, ind) => (
					<Todo key={`todo-id-${ind}`} setTodo={setTodo} setDone={setDone} index={ind} isDone={isDoneList} todoText={todo}/>
				))
			}
		</div>
	);
}
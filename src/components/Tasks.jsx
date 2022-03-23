import React,{useContext} from 'react'
import TaskContext from '../context/TaskContext'

export const Tasks = () => {
	const {tasks, isLoading, updateTask, deleteTask} = useContext(TaskContext)

	if(!isLoading && (!tasks || tasks.length === 0)) {
		return (
			<div>No task yet</div>
		)
	}

	return (
		<>
			<h3>Tasks</h3>
			<div className="legend">
				<span>Double click to mark as complete</span>
				<span>
					<span className="incomplete-box"></span> = Incomplete
				</span>
				<span>
					<span className="complete-box"></span> = Complete
				</span>
			</div>

			<div className="todos">
				{tasks.map(task => (
					<div 
					className={task.completed ? 'todo is-complete' : 'todo'} 
						key={task.id}
						onDoubleClick={() => updateTask(task.id,{
							id: task.id,
							title: task.title,
							completed: !task.completed
						})}
					>
            {task.title}
						<i className="fas fa-trash-alt" onClick={() => deleteTask(task.id)}></i>
					</div>
				))} 
			</div>
		</>
	)
}

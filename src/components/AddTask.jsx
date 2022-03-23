import React,{useState,useContext} from 'react'
import TaskContext from '../context/TaskContext'

export const AddTask = () => {
	const {addTask} = useContext(TaskContext)

	const [title, setTitle] = useState('')

	const handleSubmit = e => {
		e.preventDefault()

		const newTask = {
			title,
			completed: false
		}
    
		addTask(newTask)
	}

	return (
		<>
			<h3>Add Task</h3>
			<div className='add'>
				<form onSubmit={handleSubmit}>
					<input 
						type='text' 
						name='title' 
						value={title} 
						placeholder='Add Task...' 
						onChange={e => setTitle(e.target.value)} 
					/>
					<input type='submit' value='Submit' />
				</form>
			</div>
		</>
	)
}

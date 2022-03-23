import {useState, useEffect ,createContext} from 'react'
import { createAPIEndpoint, ENDPOINTS } from '../api'
import {toast} from 'react-toastify'

const TaskContext = createContext()

export const TaskProvider = ({children}) => {
	const [isLoading, setIsLoading] = useState(true)
	const [tasks, setTasks] = useState([])

	const fetchTask = () => {
		createAPIEndpoint(ENDPOINTS.taskList)
		.fetch()
			.then(response => {
				setTasks(response.data)
				setIsLoading(false)
			})
	}

	useEffect(() => {
		fetchTask()
	},[])

	const deleteTask = id => {
		if(window.confirm(`Are you sure delete Task ${id} ?`)) {
			createAPIEndpoint(ENDPOINTS.taskDelete)
			.delete(id)
			.then(res => {
				const newTasks = tasks.filter(task => task.id !== id)
				setTasks(newTasks)
				toast.success('Task has been deleted')
			})
			.catch(err => console.log(err))	
		}
	}

	const updateTask = (id, updTask) => {
		createAPIEndpoint(ENDPOINTS.taskUpdate)
		.update(id, updTask)
		.then(res => {
			const newTasks = tasks.map(task => 
				task.id === id ? {...task, ...updTask} : task
			)
			setTasks(newTasks)
			toast.success('Task has been updated')
		})
		.catch(err => console.log(err))
	}

	const addTask = newTask => {
		createAPIEndpoint(ENDPOINTS.taskCreate)
		.create(newTask)
		.then(res => {
			const newTasks = [...tasks, res.data]
			setTasks(newTasks)
			toast.success(' A new task has been created')
		})
		.catch(err => console.log(err))
	}

	return <TaskContext.Provider value={{
		isLoading,
		tasks,
		addTask, 
		updateTask, 
		deleteTask	
	}}>
		{children}
	</TaskContext.Provider>
}

export default TaskContext
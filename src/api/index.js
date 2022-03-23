import axios from 'axios'

export const ENDPOINTS = {
	taskList: 'task-list',
	taskUpdate: 'task-update',
	taskDelete: 'task-delete',
	taskCreate: 'task-create',
}

export const createAPIEndpoint = endpoint => {
	let url = `/api/${endpoint}/`

	return {
		fetch: () => axios.get(url),
		fetchById: id=> axios.get(`${url}${id}`),
		create: data => axios.post(url, data),
		update: (id, data) => axios.put(`${url}${id}/`, data),
		delete: id => axios.delete(`${url}${id}`)
	}
}
	
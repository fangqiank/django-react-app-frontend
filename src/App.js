import React from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {TaskProvider} from './context/TaskContext'
import { AddTask } from './components/AddTask';
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';

function App() {
  return(
    <TaskProvider>
      <Header />
      <div className='container'>
        <AddTask />
        <Tasks />
      </div>  
      <ToastContainer/>
    </TaskProvider>
  )
}

export default App;

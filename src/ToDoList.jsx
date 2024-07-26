import React, { useState } from 'react';

const ToDoList = () => {
    // Define states for setting tasks and editing 
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [isEditing, setIsEditing] = useState(null);
    const [editedTask, setEditedTask] = useState('');

    //handle input changes
    const handleInputChange = (e) => {
        setNewTask(e.target.value);

    };

    //handle form submission

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (newTask.trim() !== ''){
            setTasks([...tasks,{ text: newTask, completed: false}]);
            setNewTask('');
        }
    };


    const toggleTaskCompletion = (index) => {
        const updatedTasks = tasks.map((task,i) => 
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

     // Start editing a tas
     const startEditing = (index) => {
        setIsEditing(index);
        setEditedTask(tasks[index].text);
    };

    const handleEditInputChange = (e) => {
        setEditedTask(e.target.value);
    };

    // Save the edited task
    const saveTask = (index) => {
        const updatedTasks = tasks.map((task, i) => {
            if (i === index) {
                return { ...task, text: editedTask };
            } else {
                return task;
            }
        });
        setTasks(updatedTasks);
        setIsEditing(null);
    };
    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };


    return(
        <div>
            <h1>To-Do List</h1>
            <form onSubmit={handleFormSubmit}>
                <input type="text"
                value={newTask}
                onChange={handleInputChange}
                placeholder="Enter a new task" 
                />
                <button type="submit">Add Task</button>
            </form>
            <ul>
                {tasks.map((task,index) => (
                    <li
                        key={index}
                        style={{
                            textDecoration: task.completed ? 'line-through' : 'none',
                            cursor: 'pointer',
                        }}
                    >
                        
                        {isEditing === index ? (
                            <div>
                                <input
                                    type="text"
                                    value={editedTask}
                                    onChange={handleEditInputChange}
                                />
                                <button onClick={() => saveTask(index)}>Save</button>
                            </div>
                        ) : (
                            <span onClick={() => toggleTaskCompletion(index)}>{task.text}</span>
                        )}
                        <button onClick={() => startEditing(index)}>Edit</button>
                        <button onClick={() => deleteTask(index)}>Delete</button>

                        

                    </li>
                ))}
            </ul>
        </div>
    );

}    

export default ToDoList;
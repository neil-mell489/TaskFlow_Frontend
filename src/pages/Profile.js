import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Calendar from 'react-calendar';
import TaskBox from "../components/TaskBox"; // Importing the TaskBox component from its own file

const Profile = ({ user, fetchUser }) => {
    const params = useParams();
    const [date, setDate] = useState(new Date());
    const [tasks, setTasks] = useState([]); // State to store tasks
    const [isTaskBoxOpen, setIsTaskBoxOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null); // State to store the selected task for editing

    useEffect(() => {
        fetchUser(params.id);
    }, [params.id, fetchUser]);

    const handleAddTask = (task) => {
        // Assign a unique ID to the task
        const newTask = { ...task, id: Date.now() };
        // Add the new task to the tasks array
        setTasks([...tasks, newTask]);
        setIsTaskBoxOpen(false); // Close the TaskBox after submitting the form
    };

    const handleEditTask = (task) => {
        // Set the selected task for editing
        setSelectedTask(task);
        setIsTaskBoxOpen(true); // Open the TaskBox for editing
    };

    const userProfile = () => {
        return (
            <div className="profile-heading">
                <h1>Welcome, {user.username}</h1>
                <h3>Calendar Display:</h3>
                <Calendar
                    onChange={setDate}
                    value={date}
                    tileContent={({ date, view }) => {
                        if (view === 'month') {
                            // Get tasks for the current date
                            const tasksForDate = tasks.filter(task => {
                                const taskDate = new Date(task.date);
                                return taskDate.getDate() === date.getDate() &&
                                       taskDate.getMonth() === date.getMonth() &&
                                       taskDate.getFullYear() === date.getFullYear();
                            });
                            
                            // Render tasks for the current date
                            return (
                                <div>
                                    {tasksForDate.map(task => (
                                        <div key={task.id}>
                                            <p>{task.title} ({task.time})</p>
                                            <button onClick={() => handleEditTask(task)}>Edit</button>
                                        </div>
                                    ))}
                                </div>
                            );
                        }
                    }}
                />
                <button onClick={() => setIsTaskBoxOpen(true)}>Add Task</button>
                <TaskBox isOpen={isTaskBoxOpen} onClose={() => setIsTaskBoxOpen(false)} onSubmit={handleAddTask} task={selectedTask} />
            </div>
        );
    };

    // Check for user data and return accordingly...
    const checkForUser = () => {
        let token = localStorage.getItem("authToken");
        if (!user && !token) {
            return (
                <div style={{ color: "white" }}>
                    <h1>403 Forbidden</h1>
                </div>
            );
        } else if (!user) {
            return (
                <div style={{ color: "white" }}>
                    <h1>Loading...</h1>
                </div>
            );
        }
    };

    return user ? userProfile() : checkForUser();
};

export default Profile;

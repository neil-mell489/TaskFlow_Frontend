import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Calendar from 'react-calendar';
import TaskBox from "../components/TaskBox"; // Importing the TaskBox component from its own file
import fetchUser from "/App"

const Profile = (props) => {
    const params = useParams();
    const [date, setDate] = useState(new Date());
    const [events, setEvents] = useState([]); // State to store tasks
    const [isTaskBoxOpen, setIsTaskBoxOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null); // State to store the selected task for editing

    const newForm = {
        title: "",
        description: "",
        date: "",
        time: "",
    }

    const [form, setForm] = useState(newForm)

    useEffect(() => {
        fetchUser(params.id);
    }, [params.id, fetchUser]);

    const handleAddEvent = (e) => {
        e.preventDefault()
        props.createEvent(form)
        setForm(newForm)
        
        // Assign a unique ID to the task
        const newEvent = { ...events, id: Date.now() };

        // Add the new task to the tasks array
        setEvents([...events, newEvent]);

        setIsTaskBoxOpen(false); // Close the TaskBox after submitting the form
    };

    const handleEditEvent = (task) => {
        // Set the selected task for editing
        setSelectedTask(task);
        setIsTaskBoxOpen(true); // Open the TaskBox for editing
    };

    const userProfile = () => {
        return (
            <div className="profile-heading">
                <h1>Welcome, {User.username}</h1>
                <h3>Calendar Display:</h3>
                <Calendar
    onChange={setDate}
    value={date}
    tileContent={({ date, view }) => {
        if (view === 'month') {
            // Get tasks for the current date
            const eventsForDate = events.filter(event => {
                const eventDate = new Date(event.date);
                return eventDate.getDate() === date.getDate() &&
                    eventDate.getMonth() === date.getMonth() &&
                    eventDate.getFullYear() === date.getFullYear();
            });

            // Render tasks for the current date
            return (
                <div>
                    {eventsForDate.map(event => (
                        <div key={event.id}>
                            <p>{event.title} ({event.time})</p>
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
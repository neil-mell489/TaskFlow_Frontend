import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NewEvent() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('00:00');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleTimeChange = (newTime) => {
    setTime(newTime);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can submit the form data to your backend
    const eventData = {
      title,
      description,
      date,
      time,
    };
    console.log(eventData);
    // Reset form fields if needed
    setTitle('');
    setDescription('');
    setDate(new Date());
    setTime('00:00');
  };

  return (
    <div>
      <h1>New Event Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" value={description} onChange={handleDescriptionChange} />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" value={date.toISOString().split('T')[0]} onChange={(e) => handleDateChange(new Date(e.target.value))} />
        </div>
        <div>
          <label htmlFor="time">Time:</label>
          <input type="time" id="time" value={time} onChange={(e) => handleTimeChange(e.target.value)} />
        </div>
        <button type="submit">Create Event</button>
      </form>
      <Link to="/homepage">AUTOMATIC HOMEPAGE PATH (DEV ONLY)</Link>
    </div>
  );
}

export default NewEvent;

import React, { useState } from 'react';

function EditEvent() {
//   Variables for Event Details
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  // Placeholder data for pre-population (to be replaced with actual data)
  // pre-population logic goes here I think?

  // Function to handle form submission
    //...

  return (
    <div>
      <h1>Edit Event</h1>

      
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
          ></textarea>
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="text"
            id="date"
            value={date}
            placeholder="dd/mm/yyyy"
          />
        </div>
        <div>
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            value={time}
          />
        </div>
        <button type="submit">Save Changes</button>
      
    </div>
  );
}

export default EditEvent;

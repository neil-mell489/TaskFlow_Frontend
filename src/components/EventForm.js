import React, { useState, useEffect } from 'react';

const EventForm = ({ setShowEventForm, event, onSubmit }) => {
  const [formData, setFormData] = useState({
    eventName: event ? event.eventName : '',
    description: event ? event.description : '',
    date: event ? event.date : '',
    time: event ? event.time : '',
  });

  useEffect(() => {
    // Update form data when the event prop changes
    if (event) {
      setFormData({
        eventName: event.eventName,
        description: event.description,
        date: event.date,
        time: event.time,
      });
    }
  }, [event]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(event ? `http://localhost:4000/api/events/${event._id}` : 'http://localhost:4000/api/events', {
        method: event ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error(`Failed to ${event ? 'edit' : 'create'} event: ${response.statusText}`);
      }
      // If successful, close the form
      setShowEventForm(false);
      console.log(`${event ? 'Event edited' : 'Event created'} successfully!`);
      // Call the onSubmit function passed from the parent component to handle updates in the parent component
      onSubmit();
    } catch (error) {
      console.error(`Failed to ${event ? 'edit' : 'create'} event:`, error.message);
    }
  };

  // Function to open the pop-up window
  const handleViewEvent = () => {
    // Implement the logic to display the event details in a pop-up window
    // You can use a modal or a custom pop-up component for this purpose
  };

  return (
    <div>
      <h2>{event ? 'Edit Event' : 'Create Event'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" name="eventName" value={formData.eventName} onChange={handleChange} />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" name="description" value={formData.description} onChange={handleChange} />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} />
        </div>
        <div>
          <label>Time:</label>
          <input type="time" name="time" value={formData.time} onChange={handleChange} />
        </div>
        <button type="submit">{event ? 'Edit' : 'Create'} Event</button>
      </form>
      {/* View button */}
      <button className="view-button" onClick={handleViewEvent}>View Event</button>
    </div>
  );
};

export default EventForm;

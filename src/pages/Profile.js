import React, { useState, useEffect } from 'react';
import EventForm from '../components/EventForm';
import Calendar from 'react-calendar';
import '../assets/css/styles.css';

const Profile = ({ loggedIn }) => {
  const [showEventForm, setShowEventForm] = useState(false);
  const [events, setEvents] = useState([]);
  const [date, setDate] = useState(new Date());
  const [editingEvent, setEditingEvent] = useState(null);

  useEffect(() => {
    fetchEvents(); // Fetch events when component mounts
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/events', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const jsonResponse = await response.json();
      const eventsData = jsonResponse.data;
  
      if (Array.isArray(eventsData)) {
        setEvents(eventsData);
      } else {
        console.error('Expected an array of events, but got:', eventsData);
        setEvents([]);
      }
    } catch (error) {
      console.error('Error fetching events:', error);
      setEvents([]);
    }
  };

  const handleCreateEvent = async () => {
    setShowEventForm(true);
    setEditingEvent(null);
  };

  const handleEditEvent = (event) => {
    setShowEventForm(true);
    setEditingEvent(event);
  };

  const handleDeleteEvent = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/api/events/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete event');
      }
  
      // Refetch events after deleting an event
      fetchEvents();
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  const handleEventFormSubmit = () => {
    fetchEvents();
    setShowEventForm(false);
    setEditingEvent(null);
  };

  const convertTo12HourTime = (time24) => {
    const [hours, minutes] = time24.split(':');
    const period = hours >= 12 ? 'PM' : 'AM';
    const hours12 = hours % 12 || 12;
    return `${hours12}:${minutes} ${period}`;
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <button onClick={handleCreateEvent}>Create Event</button>
      {showEventForm && <EventForm setShowEventForm={setShowEventForm} onSubmit={handleEventFormSubmit} event={editingEvent} />}
      <Calendar
        onChange={setDate}
        value={date}
        tileContent={({ date, view }) => {
          const dayEvents = events?.filter(event => 
            new Date(event.date).toDateString() === date.toDateString()
          );
          return (
            <ul>
              {dayEvents.map((event, index) => (
                <li key={index}>
                  <div>
                    <span>{event.eventName}</span>
                    <button onClick={() => handleEditEvent(event)}>Edit</button>
                    <button onClick={() => handleDeleteEvent(event._id)}>Delete</button>
                  </div>
                  <div>{convertTo12HourTime(event.time)}</div>
                </li>
              ))}
            </ul>
          );
        }}
      />
    </div>
  );
};

export default Profile;

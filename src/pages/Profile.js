import React, { useState, useEffect } from 'react';
import EventForm from '../components/EventForm';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import '../assets/css/styles.css';



const Profile = ({ loggedIn }) => {
  const [showEventForm, setShowEventForm] = useState(false);
  const [events, setEvents] = useState([]);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/events', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // Include other headers as needed, such as Authorization if using token-based authentication
          },
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const jsonResponse = await response.json();
        // Access the actual events array using the 'data' property
        const eventsData = jsonResponse.data;
  
        if (Array.isArray(eventsData)) {
          setEvents(eventsData);
        } else {
          console.error('Expected an array of events, but got:', eventsData);
          setEvents([]); // Set to empty array if data is not an array
        }
      } catch (error) {
        console.error('Error fetching events:', error);
        setEvents([]); // Set to empty array to ensure `events` is always an array
      }
    };
  
    fetchEvents();
  }, []);
  

  const handleCreateEvent = () => {
    setShowEventForm(true);
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <button onClick={handleCreateEvent}>Create Event</button>
      {showEventForm && <EventForm setShowEventForm={setShowEventForm} />}
      <Calendar
        onChange={setDate}
        value={date}
        tileContent={({ date, view }) => {
          // filter events to display on correct dates
          const dayEvents = events?.filter(event => 
            new Date(event.date).toDateString() === date.toDateString()
          );
          return (
            <ul>
              {dayEvents.map((event, index) => (
                <li key={index}>{event.eventName}</li>
              ))}
            </ul>
          );
        }}
      />
    </div>
  );
};

export default Profile;

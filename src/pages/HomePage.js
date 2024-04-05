import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar'; // Import Calendar component

function HomePage() {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date()); // State for selected date

  useEffect(() => {
    fetch('/api/events')
      .then(response => response.json())
      .then(data => {
        setEvents(data.data);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  }, []);

  // Function to handle date change
  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h1>TaskFlow!</h1>
      <div>
        <Link to="/NewEvent">
          <button>New Event</button>
        </Link>
        <button>Log Out</button>
        <div>
        <Link to="/new-event">AUTOMATIC NEW EVENT PATH (DEV)</Link>
        </div>
        <div>
        <Link to="/">AUTOMATIC LOGOUT PATH (DEV)</Link>
        </div>
      </div>
      {/* Render Calendar with onChange event handler */}
      <Calendar onChange={handleDateChange} value={selectedDate} />
      <div>
        {events.map(event => (
          <div key={event._id}>
            <p>{event.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;

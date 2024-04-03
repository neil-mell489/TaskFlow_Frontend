import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const [events, setEvents] = useState([]);

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

  return (
    <div>
      <h1>TaskFlow!</h1>
      <div>
        <Link to="/NewEvent">
          <button>New Event</button>
        </Link>
        <button>Log Out</button>
      </div>
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

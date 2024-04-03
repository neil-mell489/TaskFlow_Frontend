import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>TaskFlow!</h1>
      <div>
        <Link to="/NewEvent">
          <button>New Event</button>
        </Link>
        <button>Log Out</button>
      </div>
    </div>
  );
}

export default HomePage;

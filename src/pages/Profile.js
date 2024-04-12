import React, { useState } from 'react';
import EventForm from '../components/EventForm';

const Profile = ({ loggedIn }) => {
  const [showEventForm, setShowEventForm] = useState(false);

  const handleCreateEvent = () => {
    setShowEventForm(true);
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <button onClick={handleCreateEvent}>Create Event</button>

      {/* Render the EventForm if showEventForm is true */}
      {showEventForm && <EventForm setShowEventForm={setShowEventForm} />}
    </div>
  );
};

export default Profile;

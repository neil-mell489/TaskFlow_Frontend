import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const Profile = ({ user, fetchUser }) => {
    const params = useParams();
    const [date, setDate] = useState(new Date()); // State to store selected date

    useEffect(() => {
        // if user refreshes, fetch the data again
        fetchUser(params.id);
    }, []);

    // Render profile content
    const userProfile = () => {
        return (
            <div className="profile-heading">
                <h1>Welcome, {user.username}</h1>
                <h3>Calendar Display:</h3>
                <Calendar
                    onChange={setDate} // Handle date change
                    value={date} // Pass current selected date
                />
            </div>
        );
    };

    // Check for user data
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

    // Render profile or loading message
    return user ? userProfile() : checkForUser();
};

export default Profile;

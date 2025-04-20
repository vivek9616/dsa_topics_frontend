import React from "react";
import './Profile.css';
const Profile = ({ username }) => {
  return (
    <div className="profile">
      <h2>Welcome, {username}!</h2>
      <p>Here are your DSA topics to explore and complete.</p>
    </div>
  );
};

export default Profile;
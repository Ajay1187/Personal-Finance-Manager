import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './setAvatar.css';

function SetAvatar() {
  const [avatars, setAvatars] = useState([]);
  const [selectedAvatar, setSelectedAvatar] = useState(undefined);
  const navigate = useNavigate();

  const fetchAvatars = async () => {
    try {
      const requests = Array.from({ length: 4 }, () => axios.get(`https://api.multiavatar.com/${Math.round(Math.random() * 1000)}`));
      const responses = await Promise.all(requests);
      const avatarData = responses.map(response => response.data);
      setAvatars(avatarData);
    } catch (error) {
      console.error('Error fetching avatars:', error);
    }
  };

  useEffect(() => {
    fetchAvatars();
  }, []);

  const setProfilePicture = () => {
    if (selectedAvatar === undefined) {
      alert('Please select an avatar');
    } else {
      localStorage.setItem('user-avatar', avatars[selectedAvatar]);
      navigate('/home');
    }
  };

  return (
    <div className="set-avatar-container">
      <h1>Pick Your Avatar</h1>
      <div className="avatar-grid">
        {avatars.map((avatar, index) => (
          <img
            key={index}
            src={`data:image/svg+xml;base64,${btoa(avatar)}`}
            alt="avatar"
            onClick={() => setSelectedAvatar(index)}
            className={selectedAvatar === index ? 'selected' : ''}
          />
        ))}
      </div>
      <button onClick={setProfilePicture}>Set Avatar</button>
    </div>
  );
}

export default SetAvatar;

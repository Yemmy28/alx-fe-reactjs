import React, { useContext } from 'react';
import UserContext from '../UserContext'; 

const UserProfile = () => {
  const user = useContext(UserContext); 

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Bio: {user.bio}</p>
    </div>
  );
};

export default UserProfile;

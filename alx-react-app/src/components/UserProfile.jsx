import React from 'react';

function UserProfile(props) {
    // Destructure the props
    const { name, age, bio } = props;

    return (
        <div className="user-profile">
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Bio: {bio}</p>
        </div>
    );
}

export default UserProfile;

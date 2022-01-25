import React from 'react';

const UserCard = ({u}) => {

    return (
        <div className={'user-card'}>
            <p>{u.name}</p>
            <p>{u.pass}</p>
        </div>
    );
};

export default UserCard;
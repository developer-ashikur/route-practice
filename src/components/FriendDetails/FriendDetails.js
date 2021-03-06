import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetails = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    },[])
    return (
        <div>
            <h3>Details about your friend: {friendId}</h3>
            <h5>Name: {friend.name} </h5>
            <h5>Email: {friend.email} </h5>
            <h5>Phone: {friend.phone} </h5>
        </div>
    );
};

export default FriendDetails;
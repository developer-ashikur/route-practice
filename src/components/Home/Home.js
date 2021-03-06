import { useEffect, useState } from 'react';
import '../../App.css';
import Friend from '../Friend/Friend';

const Home = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setFriends(data))
    },[]);
    return (
        <>
            <h1>Friends: {friends.length} </h1>
            <div className="friends">
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
            </div>
        </>
    );
};

export default Home;
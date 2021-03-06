import React from 'react';
import { Link, useHistory} from 'react-router-dom';
import './Friend.css';

const Friend = ({friend}) => {
    const history = useHistory();
    const handleClick = (friendId) => {
        history.push(`/friend/${friendId}`)
    }
    const {name, email, id} = friend;
    return (
        <div className='friend'>
            <h3>Name: {name} </h3>
            <h3>Email: {email} </h3>
            <Link to={`/friend/${id}`}>Show Details of {id}</Link>
            <h1><button onClick={() => handleClick(id)}><h1>Click Me</h1></button></h1>
        </div>
    );
};

export default Friend;
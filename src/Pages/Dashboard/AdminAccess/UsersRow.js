import React from 'react';

const UsersRow = ({ user, index }) => {
    const { email, _id } = user;
    const handleDelete = event => {
        event.preventDefault();
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td><button  className="btn btn-xs btn-secondary hover:text-primary hover:bg-white hover:border-primary">Make Admin</button></td>
            <td><button onClick={() => handleDelete(_id)} className="btn btn-xs btn-primary">Delete</button></td>
        </tr>
    );
};

export default UsersRow;
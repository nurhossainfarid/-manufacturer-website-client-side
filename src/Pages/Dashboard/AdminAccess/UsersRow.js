import React from 'react';
import { toast } from 'react-toastify';

const UsersRow = ({ user, index, refetch }) => {
    const { email, _id, role } = user;
    const handleDelete = event => {
        event.preventDefault();
    }
        // admin role
        const makeAdmin = (email) => {
            fetch(`https://limitless-forest-21583.herokuapp.com/user/admin/${email}`, {
                method: "PUT",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => {
                    if (res.status === 403) {
                        toast.error('Fail to make an admin')
                    }
                    return res.json()
            })
            .then(data => {
                console.log(data);    
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }
            })
        }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{!role && <button onClick={() => makeAdmin(email)}  className="btn btn-xs btn-secondary hover:text-primary hover:bg-white hover:border-primary">Make Admin</button>}</td>
            <td><button onClick={() => handleDelete(_id)} className="btn btn-xs btn-primary">Delete</button></td>
        </tr>
    );
};

export default UsersRow;
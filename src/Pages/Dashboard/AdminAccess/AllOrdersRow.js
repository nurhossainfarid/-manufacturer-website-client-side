import React, { useState } from 'react';

const AllOrdersRow = ({ ord, index , refetch}) => {
    const [deletingOrder, setDeletingOrder] = useState(null);
    const { userName, userEmail,  Order, totalAmount , phone, address, _id } = ord;
    const handleDelete = id => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setDeletingOrder(data);
            refetch();
        })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{userName}</td>
            <td>{userEmail}</td>
            <td>{Order}</td>
            <td>{totalAmount}</td>
            <td>{phone}</td>
            <td>{address}</td>
            <td><button onClick={() => handleDelete(_id)} className="btn btn-xs btn-primary">Delete</button></td>
        </tr>
    );
};

export default AllOrdersRow;
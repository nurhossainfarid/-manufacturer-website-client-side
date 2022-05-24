import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const OrdersRow = ({ myOrder, index }) => {
    const [deletingOrder, setDeletingOrder] = useState(null);
    const { Order,  quantity, totalAmount, _id } = myOrder;
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
        })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{Order}</td>
            <td>{quantity}</td>
            <td>{totalAmount}</td>
            <td><button onClick={() => handleDelete(_id)} className="btn btn-xs btn-primary">Delete</button></td>
        </tr>
    );
};

export default OrdersRow;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const OrdersRow = ({ myOrder, index, refetch }) => {
    const [deletingOrder, setDeletingOrder] = useState(null);
    const { Order,  quantity, totalAmount, _id, paid } = myOrder;
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
            <td>{Order}</td>
            <td>{quantity}</td>
            <td>{totalAmount}</td>
            <td>
                {
                    (totalAmount && !paid) && <Link to={`/dashboard/payment/${_id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>
                }
                {
                    (totalAmount && paid) && <>
                        <p><span className='text-success'>Paid</span></p>
                    </>
                }
            </td>
            <td><button onClick={() => handleDelete(_id)} className="btn btn-xs btn-primary">Delete</button></td>
        </tr>
    );
};

export default OrdersRow;
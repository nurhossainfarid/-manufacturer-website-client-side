import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AllOrdersRow = ({ ord, index , refetch, paid}) => {
    const [deletingOrder, setDeletingOrder] = useState(null);
    const { userName, userEmail,  Order, totalAmount , phone, address, _id } = ord;
    const handleDelete = id => {
        fetch(`https://limitless-forest-21583.herokuapp.com/orders/${id}`, {
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
            <td>
                {
                    (totalAmount && !paid) && <button className='btn btn-xs btn-success'>UnPaid</button>
                }
                {
                    (totalAmount && paid) && <>
                        <p><span className='text-success'>Paid</span></p>
                    </>
                }
            </td>
            <td>
            {
                (totalAmount && !paid) &&  <button onClick={() => handleDelete(_id)} className="btn btn-xs btn-primary">Delete</button>
            }
            </td>
        </tr>
    );
};

export default AllOrdersRow;
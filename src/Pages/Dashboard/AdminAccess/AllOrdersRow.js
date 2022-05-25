import React from 'react';

const AllOrdersRow = ({ord, index}) => {
    const { userName, userEmail,  Order, totalAmount , phone, address, _id } = ord;
    const handleDelete = event => {
        event.preventDefault();
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
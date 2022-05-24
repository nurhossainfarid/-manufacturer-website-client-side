import React from 'react';

const OrdersRow = ({ myOrder, index }) => {
    const { Order, userName, quantity, totalAmount } = myOrder;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{Order}</td>
            <td>{quantity}</td>
            <td>{totalAmount}</td>
            <td><button className="btn btn-xs btn-primary">Delete</button></td>
        </tr>
    );
};

export default OrdersRow;
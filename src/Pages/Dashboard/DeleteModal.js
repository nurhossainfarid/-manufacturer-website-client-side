import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({ deletingProduct, refetch, setDeletingProduct }) => {
    const { name , _id } = deletingProduct;
    const handleDelete = () => {
        fetch(`http://localhost:5000/products/${_id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.deletedCount) {
                toast.success(`Product ${name} is deleted successfully`);
                refetch();
                setDeletingProduct(null);
            } else {
                toast.error(`Failed delete`)
            }
        })
    }
    return (
        <div>
            <input type="checkbox" id="doctor-delete-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure you want to delete {name}!</h3>
                <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                <div class="modal-action">
                    <button onClick={() => handleDelete()} class="btn btn-error">Delete</button>
                    <label for="doctor-delete-modal" class="btn">Cancel</label>
                </div>
            </div>
            </div>
        </div>
    );
};

export default DeleteModal;
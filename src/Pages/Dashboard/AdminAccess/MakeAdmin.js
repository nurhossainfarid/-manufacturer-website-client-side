import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Share/Loading/Loading';
import UsersRow from './UsersRow';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('make admin', () => fetch('https://limitless-forest-21583.herokuapp.com/user', {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className='pl-5 h-screen my-5'>
            <div className="text-sm breadcrumbs text-primary">
                <ul>
                    <li>DashBoard</li> 
                    <li>Make Admin</li>
                </ul>
            </div>
            <h2 className='text-5xl text-secondary font-semibold'>Make Admin</h2>
            <div className='bg-primary h-1 w-48 my-5'></div>
            <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Users</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UsersRow key={user._id} user={user} index={index} refetch={refetch} ></UsersRow>)
                        }
                    </tbody>
            </table>
        </div>
    );
};

export default MakeAdmin;
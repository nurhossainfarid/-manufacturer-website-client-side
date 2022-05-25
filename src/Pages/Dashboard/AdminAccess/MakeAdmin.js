import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Share/Loading/Loading';

const MakeAdmin = () => {
    const { data: users, isLoading } = useQuery('make admin', () => fetch('http://localhost:5000/user', {
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
            <div>
                {
                    users.map(user => <h1>{user.email}</h1>)
                }
            </div>
        </div>
    );
};

export default MakeAdmin;
import React, { useEffect, useState } from 'react';    
import useUser from '../../useUser/useUser';
import SingleUser from '../SingleUser/SingleUser';
import { Link } from 'react-router-dom';

const Home = () => {
const user  = useUser('https://jsonplaceholder.typicode.com/users');
if(user.length){
    user.length = 4;
}
    return (
        <div className='container'>
            <h3 className='my-2'>Total User: {user.length}</h3>
            <div className='row mb-4'>
           {
            user.map(data => <SingleUser 
            key={user.id}
            data={data}
            ></SingleUser>)
           }
                       
            </div>
            <Link  to="/user">Load More...</Link>
        </div>
        
    );
};

export default Home;
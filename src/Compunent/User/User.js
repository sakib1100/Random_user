import React from 'react';
import useUser from '../../useUser/useUser';
import SingleUser from '../SingleUser/SingleUser';

const User = () => {
    const user  = useUser('https://jsonplaceholder.typicode.com/users');
console.log(user)
    return (
        <div className='container'>
        <div className='row'>
      {
        user?.map(data => <SingleUser  key={data.id} data={data}></SingleUser>)
      }
        </div>
        </div>
    );
};

export default User;
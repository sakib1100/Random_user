import React from 'react';
import { useParams } from 'react-router-dom';
import useUser from '../../useUser/useUser';
import SingleUser from '../SingleUser/SingleUser';

const UserDetail = () => {
    let { userId } = useParams();
    const datas = useUser(`https://jsonplaceholder.typicode.com/users?id=${userId}`)
    return (
        <div className='container'>
       <div className='row justify-content-center text-center'>
       
            <SingleUser data={datas[0]}>
          {
            {email:datas[0]?.email, phone:datas[0]?.phone }
          }
            </SingleUser>
       </div>
        </div>
    );
};

export default UserDetail;
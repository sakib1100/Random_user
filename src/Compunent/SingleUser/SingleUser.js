import React from 'react';
import { Link } from 'react-router-dom';

const SingleUser = ({data,children}) => {
    const {name,id} = data || {};
   const {email,phone} = children || {};
    return (
        <div className='col-4 gy-4'>
           <div class="card border-danger shadow">
  <div class="card-body">
    <h5 class="card-title text-danger">Name: {name}</h5>
    <h6 class="card-subtitle mb-2 text-muted ">Id: {id}</h6>
    <h5> {email}</h5>
    <h6> {phone}</h6>
    <Link to={`/userDetail/${id}`} class="card-link">Detail User</Link>
  </div>
</div>
        </div>
    );
};

export default SingleUser;
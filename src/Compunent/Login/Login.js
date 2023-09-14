import React, { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';

import { useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
    const [login,setLogin] = useState(false); 
  const [confirmError,setConfirmError] = useState('');
const [inpuUser,setInputUser] = useState({
  email: '',
  password: '',
  conPassword: ''
})

// create user with Register
const [
  createUserWithEmailAndPassword,
  createUser,
  createLoading,
  createError,
] = useCreateUserWithEmailAndPassword(auth);
// create login 
const [
  signInWithEmailAndPassword,
  user,
  loading,
  error,
] = useSignInWithEmailAndPassword(auth);


const [loginUser,loginLoading,loginError] = useAuthState(auth);

const handlFormInput = (event) => {
  inpuUser[event.target.name] = event.target.value;
}

const handleOnSubmit = (event) => {
event.preventDefault();

if(!login){
  if(inpuUser.password !== inpuUser.conPassword){
    setConfirmError('Password Can Not Match.');
    return;
    }

  setConfirmError("");
  createUserWithEmailAndPassword(inpuUser.email, inpuUser.password);
}
else{
  signInWithEmailAndPassword(inpuUser.email, inpuUser.password);
}
}


let navigate = useNavigate();
let location = useLocation();

let from = location.state?.from?.pathname || "/";
if(loginUser){
navigate(from, {replace:true});
}
 

    return (
        <div className='container'>
<form onSubmit={handleOnSubmit} className='w-25 mx-auto border p-3 rounded mt-5 shadow'>
    <h3 className='font-bold text-center'>{login? "Login" : "Register"}</h3>
  <div class="mb-3">
    <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" onBlur={(event) => handlFormInput(event)} name='email' placeholder='Email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div class="mb-3">
    <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" onBlur={(event) => handlFormInput(event)} name='password' placeholder='Password' class="form-control" id="exampleInputPassword1" />
  </div>
 {
    !login &&  <div class="mb-3">
    <label htmlFor="exampleInputConPassword1" class="form-label">Confirm Password</label>
    <input onBlur={(event) => handlFormInput(event)} type="password" name='conPassword' placeholder='Confirm Password' class="form-control" id="exampleInputPassword1" />
  </div>
 }
 <p className='text-danger'>{confirmError}</p>
{
  user && <p className='text-success'>User successfully done.</p>
}
{
  createError && <p className='text-danger'>{createError.message}</p>
}
{
  createUser && <p className='text-success'>Hurrray! Create user successfully.</p>
}
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" onChange={() => setLogin(!login)} id="exampleCheck1" />
    <label class="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-danger">{login ? "Login" : "Register"}</button>
</form>       
 </div>
    );
};

export default Login;
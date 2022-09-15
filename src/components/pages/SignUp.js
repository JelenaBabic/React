import React from 'react';
import '../../App.css';
import Button from '../Button';


function SignUp(){
    return(
        <div className='sign-up' >
        <div className='row'>
        <h1 className='title'>  SIGN UP</h1>
        </div>
        <div className='row'>
        <form>
        <div className='form-group'>
        <input
              className='footer-input'
              name='firstName'
              type='email'
              placeholder='Your Name'
            /> 
            </div>
            <div className='row'>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
             </div>
            <Button path='/sign-up' buttonStyle='btn--success' onClick={()=>alert("Welcome, fan!")}>Sign Up</Button>
          </form>
          </div>
        </div>
    )
}

export default SignUp;
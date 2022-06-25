import { useState } from 'react';
import {useForm} from 'react-hook-form'

function Register() {
    
    return(   
             
        <div className='container text-center'>
            <h3 className='mt-3'><span>LOGIN/REGISTRATION FORM</span></h3>
            <form className='border border-2 border-dark p-4 m-5 mt-3 text-center'>
                <div className='m-1 p-1'>
                <label className='d-block'><span>User Name: </span></label>
                <input type="text" className='w-50' />
                </div>
                <div className='m-1 p-1'>
                    <label className='d-block'><span>Email</span></label>
                    <input type="email" className='w-50' />
                </div>
                <div className='m-1 p-1'>
                    <label className='d-block'><span>Password: </span></label>
                    <input type="password" className='w-50' />
                </div>
                <div className='m-1 p-1'>
                    <button className='btn-grad2 d-block mx-auto' type="submit" >Register</button>
                </div>
            </form>

        </div>
    )
  };
  
  export default Register;
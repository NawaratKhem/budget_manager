import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

export default function Header(){
    return(
        <div 
        className='text-white d-flex align-items-center h-100 w-100 justify-content-around'
        onClick={()=>{
            //alert("Cool!")
        }}>
            {/*This is the logo part*/}
            <div className='fs-3'>
                Budget
            </div>

            <div>
            <div className='btn btn-success mx-3'>
                Add
            </div>
            <div className='btn btn-outline-light'>
                Summary
            </div>
            </div>
        </div>
    );
}
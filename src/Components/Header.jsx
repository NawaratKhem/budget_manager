import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import CatModal from './CatModal';
import { Link } from "react-router-dom";

export default function Header(){

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () =>{
        setShowModal(false);
    };

    return(
        <>
        <div 
        className='text-white d-flex align-items-center h-100 w-100 justify-content-around'>
            {/*This is the logo part*/}
            <Link to={"/"} style={{textDecoration: "none", color: "white"}} className='fs-3'>
                Budget
            </Link>

            <div>
            <div className='btn btn-success mx-3' onClick={handleShowModal}>
                Add
            </div>
            <div className='btn btn-outline-light'>
                Summary
            </div>
            </div>
        </div>
        <CatModal onShow={showModal} onClose={handleCloseModal}/>
        </>
    );
}
import React from 'react'
    import './Contact.css'
    import {signout} from '../../assets'
    
    
    const Contact = (props) => {
    return (
    <section className='contactCard'>
        <div>
            <img src={`../../assets/icons/${props.img}`} className="user-img" alt="" />
            <p className='light-text'>Welcome</p>
            <h1>{props.user}</h1>
        </div>
        <hr />
        <div>
            <p className='light-text'>Cnic Number</p>
            <p>{props.cnic}</p>
    
            <p className='light-text'>Designation</p>
            <p>{props.designation}</p>
    
        </div>
        <hr />
        <div>
            <p className='light-text'>Email</p>
            <p>{props.email}</p>
    
            <p className='light-text'>Contact No.</p>
            <p>{props.number}</p>
        </div>
        <hr />
    
        <button className='sign-out'>
            Signout
            <img id="arrow" src={signout} alt="" />
        </button>
    
    </section>
    
    )
    }
    
    export default Contact
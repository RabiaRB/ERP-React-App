 import React from 'react'
    import "./Category.css"
    import {
    arrow
    } from '../../assets'
    
    
    const Category = (props) => {
    return (
    <section className='category'>
        <img src={`../../assets/icons/${props.img}`} className="category-image" alt="" />
        <h2>{props.title}</h2>
        <h5>{props.description}</h5>
        <button>
            <a href="#" className='button-text'>
                Enter Now
            </a>
            <img id="arrow" src={arrow} alt="" />
        </button>
    </section>
    )
    }
    
    export default Category
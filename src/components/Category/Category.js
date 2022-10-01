import React from 'react';
import "./Category.css";
const Category = (props) => {
    const{picture,name,info,time}=props.meal;
    return (
        <div className='setCard'>
            <div >
                <img className='img-card' src={picture} alt=""></img>
            </div>
            <div className='paraDesign'>
                 <p className='nameDesign'>{name}</p>
                 <p>{info}</p>
                 <p className='timeDesign'>Time Required: {time}min</p>
            </div>
            <button onClick={()=>props.displayItems(props.meal)} className='btn'>Add To List</button>
        </div>
    );
};

export default Category;
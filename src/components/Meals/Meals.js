import React, {useState, useEffect} from 'react';
import "./Meals.css";
import Category from '../Category/Category';
const Meals = () => {
    const [meals, setMeals]= useState([]);

    useEffect( () =>{
        fetch('https://mocki.io/v1/d07a27c7-9060-435c-a839-e5196f3a0b4e')
        .then(res => res.json())
        .then(data => setMeals(data))
    }, []);

    const displayItems= () =>{
    }
    return (
        <div>
        <div className='setPage'>
          <div className='activity'>
            {
                meals.map(meal=> <Category 
                    key={meal.id}
                    meal={meal}></Category>)
            }
          </div>
          <div className='function'>
            <div className='myInfo'>
                 <div >
                   <img className='myPic' src="https://media.istockphoto.com/photos/young-man-portrait-picture-id483265467?k=20&m=483265467&s=612x612&w=0&h=C38xiYdEiJ5OTvmgrh7zrfVPEFdllv0I5FF9Picjzic="></img>
                 </div>
                <div>
                 <h5 className='dg'>Dipayan Ghose</h5>
                 <p>Chittagong, Bangladesh</p>
                </div>
            </div>
            <div className='myBio'>
              <div>
                <h4>84 kg</h4>Weight
              </div>
              <div>
              <h4>5.10"</h4>Height
              </div>
              <div>
              <h4>25 yrs</h4>Age
              </div>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Meals;
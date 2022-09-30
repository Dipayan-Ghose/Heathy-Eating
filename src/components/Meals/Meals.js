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
            <h2>Functions</h2>
          </div>
        </div>
        </div>
    );
};

export default Meals;
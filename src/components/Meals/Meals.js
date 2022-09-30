import React, {useState, useEffect} from 'react';

const Meals = () => {
    const [meals, setMeals]= useState([]);

    useEffect( () =>{
        fetch('https://mocki.io/v1/127994b9-4305-4272-820b-6651ac2518f7')
        .then(res => res.json())
        .then(data => setMeals(data))
    }, []);

    
    return (
        <div>
          
        </div>
    );
};

export default Meals;
import React, {useState, useEffect} from 'react';
import "./Meals.css";
import Category from '../Category/Category';
const Meals = () => {
    const [meals, setMeals]= useState([]);
    const [time, setTime]= useState([]);

    useEffect( () =>{
        fetch('https://mocki.io/v1/2231789a-5e1c-47a4-b109-a1d2f369e16e')
        .then(res => res.json())
        .then(data => setMeals(data))
    }, []);

    const displayItems= (meal) =>{
      // console.log(meal);
      const newTime=[...time,meal];
      setTime(newTime);   
    }

    let timeCount= 0;
    for (const food of time){
      // console.log(food.time);
        timeCount=timeCount+ parseInt(food.time) ;
    }
    



    return (
        <div>
        <div className='setPage'>
          <div className='activity'>
            {
                meals.map(meal=> <Category 
                    key={meal.id}
                    meal={meal}
                    displayItems={displayItems}
                    ></Category>)
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
            <div>
              <h5 className='breakText'>Add A Break</h5>
              <div className='breakTime'>
                {/* <h5 onClick={breakClick}>10s</h5>
                <h5 onClick={breakClick}>20s</h5>
                <h5 onClick={breakClick}>30s</h5>
                <h5 onClick={breakClick}>40s</h5>
                <h5 onClick={breakClick}>50s</h5> */}
              </div>
            </div>
            <div>
              <h4 className='breakText'>Activity Details</h4>
              <div className='designTime'>
                <h5>Eating Time <span id='eatingTime'>{timeCount}min</span></h5>
              </div>
              <div className='designTime'>
                <h5>Break Time <span id='breakTime'>{}s</span></h5>
              </div>
            </div>
            <div >
              <button className='btnDesign'>Activity Completed</button>
            </div>




          </div>
        </div>
        </div>
    );
};

export default Meals;
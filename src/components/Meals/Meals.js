import React, {useState, useEffect} from 'react';
import "./Meals.css";
import Category from '../Category/Category';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const Meals = () => {
  
    const [meals, setMeals]= useState([]);
    const [time, setTime]= useState([]);
    const [bTime, setbTime]= useState(0);

    const notify = () => toast("Congratuations! You're done.",{ position:"top-center", autoClose:2000
   });

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
    
    const pushtime=(id)=>{
      // const newPush=[...bTime,id];
      setbTime(id);
      localStorage.setItem('bTime', JSON.stringify(bTime));
    };

    useEffect(()=>{
     const items=JSON.parse(localStorage.getItem('bTime'));
     if(items){
      setbTime(items);
     }
    },[]);


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
                <button onClick={()=>pushtime(10)} className='btnBreak'>10s</button>
                <button onClick={()=>pushtime(20)} className='btnBreak'>20s</button>
                <button onClick={()=>pushtime(30)} className='btnBreak'>30s</button>
                <button onClick={()=>pushtime(40)} className='btnBreak'>40s</button>
                <button onClick={()=>pushtime(50)} className='btnBreak'>50s</button>
              </div>
            </div>
            <div>
              <h4 className='breakText'>Activity Details</h4>
              <div className='designTime'>
                <h5>Eating Time <span id='eatingTime'>{timeCount}min</span></h5>
              </div>
              <div className='designTime'>
                <h5>Break Time <span id=''>{bTime}s</span></h5>
              </div>
            </div>
            <div >
              <button  onClick={notify} className='btnDesign'>Activity Completed</button>
            </div>




          </div>
        </div>
        <ToastContainer />
        </div>
    );
};

export default Meals;
import logo from './logo.svg';
import './App.css';
import Meals from './components/Meals/Meals';
import Header from './components/Header/Header';
import Ques from './components/Questions/Ques';

function App() {
  return (
    <div className='bodyDesign'>
    <Header></Header>
    <Meals></Meals>
    <Ques></Ques>
    </div>
  );
}

export default App;

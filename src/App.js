import logo from './logo.svg';
import './App.css';
import Meals from './components/Meals/Meals';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='bodyDesign'>
    <Header></Header>
    <Meals></Meals>
    </div>
  );
}

export default App;


import './App.css';
import Corousel from './components/Corousel';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
   <Navbar/>
   <div className="container ">
   <h2>Runner's Workout</h2>
   </div>
   <Corousel/>
   </>
  );
}

export default App;

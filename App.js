import logo from './logo.svg';
import './App.css';
import {Circle,Triangle,Square,Squareper,Rombus} from './Function.js';
import {Circle1,Triangle1,Square1,Squareper1,Rombus1} from './Class1.js';

function App() {
  return (
    <div className="App">
      <div class="fun">
      <h1>////USING FUNCTION////</h1>
       <h1>Area of Circle</h1> 
      <Circle />
      <h1>Area of Triangle
      </h1>
<Triangle />
<h1>Area of Square</h1>
<Square />
<h1>Perimeter of Square</h1>
 <Squareper />
 <h1>Area of Rombus</h1>
 <Rombus /> 
 </div>
 <div class="cls">
  <h1>////USING CLASS////</h1>
<h1>Area of Circle</h1>
<Circle1 />
      <h1>Area of Triangle
      </h1>
<Triangle1 />
<h1>Area of Square</h1>
<Square1 />
<h1>Perimeter of Square</h1>
 <Squareper1 />
 <h1>Area of Rombus</h1>
 <Rombus1 /></div>


    </div>
  );
}

export default App;

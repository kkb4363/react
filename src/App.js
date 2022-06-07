import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  return (
    <div>
      <Hello/>
    </div>
  );
}

function Hello(){
  const [set,setname] = useState('abc');
  const click = () =>{
    setname('def');
  }
  return(
    <div>
      <button onClick={click}>클릭</button>
      <p>이름 : {set}</p>
    </div>
  )
}





export default App;

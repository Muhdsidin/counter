
import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';


function App() {
  const [count, setCount]= useState(0)
  const inCreament = ()=>{
    setCount((prev)=> prev + 1)
  }
  const deCreament = ()=>{
    setCount((prev)=> prev - 1)
  }
  return (
    <div>
      <button onClick={inCreament}>Increa</button> 
      <button onClick={deCreament}>Decream</button>
      <Counter count={count}/>
    </div>
  )
}



export default App;

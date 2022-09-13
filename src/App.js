//SAMULI RAHKOLA TIK22KM DYNAAMINEN VERKKOSIVU

import { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(0)
  const [bottles,setBottles] = useState(1)
  const [time,setTime] = useState(1)
  const [gender,setGender] = useState("male")
  const [alcohol,setAlcohol] = useState(0)

  const litres = bottles * 0.33
  const grams = litres * 8 * 4.5
  const burning = weight / 10
  const gramsleft = grams - (burning * time)

const calc = (e) => {
  e.preventDefault()
  let result = 0
  if (gender === "male") {
    result = (gramsleft / (weight * 0.7))
  } else {
   result = (gramsleft / (weight * 0.6))
  } if (result>0) {
    setAlcohol(result)
  } else if (result<0) {
    setAlcohol(0)
  }
}

  return (
    <div>
      <h3>Calculating alcohol blood level</h3>
      <form onSubmit={calc}>
    <div>
    <label>Weight(kg): </label>
    <input value={weight} onChange={e => setWeight(e.target.value)}/>
    </div>
    <div>
    <label>Bottles: </label>
    <select value={bottles} onChange={e => setBottles(e.target.value)}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
    </div>
    <div>
    <label>Time(h): </label>
    <select value={time} onChange={e => setTime(e.target.value)}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
    </div>
    <div>
      <label>Gender: </label>
      <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)}/> <label>Male</label>
      <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}/> <label>Female</label>
    </div>
    <div>
      <output>{alcohol.toFixed(1)}</output>
      </div>
      <button>Calculate</button>
    </form>
    </div>
  );
}

export default App;

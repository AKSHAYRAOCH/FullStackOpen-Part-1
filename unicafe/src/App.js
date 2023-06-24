import { useState } from 'react'


const Button = ({name,Function})=>{
  return <button onClick={Function}>{name}</button>
}

const Data = ({name,data, end=""})=>{
  
  return <tr><td>{name} {data} {end}</td></tr>
 
}

const Statistics = ({good,bad,all,neutral})=>{
 if(all>0){ 
  return(  
  <div>
  <h1>Statistics</h1>
  <table>
  <tbody>
  <Data name="good" data ={good}/>
  <Data name = "neutral"data = {neutral}/>
  <Data name = "bad"data = {bad}/>
  <Data name = "all" data = {all}/>
  <Data name ="average" data={(good-bad)/all}/>
  <Data name ="positive" data = {good/all} end = "%"/>
  </tbody>
  </table>
  </div>)}
  return (
    <>
    <h1>Statistics</h1>
    <p>no feedback given</p>
    </>
  )
  
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good+bad+neutral

  

  return (
    <div>
      <h1>give feedback</h1>
      <Button name="good" Function = {()=>setGood(good+1)}/>
      <Button name = "neutral" Function={()=>setNeutral(neutral+1)}/>
      <Button name = "bad" Function={()=>setBad(bad+1)}/>
      <Statistics good={good} bad = {bad} neutral = {neutral} all = {all}/>
      
     
      
      
    </div>
  )
}

export default App
import { useState } from "react"

  
const Header = (props)=>{
    
    return (

        <h1>{props.course}</h1>
    )
}

const Part =(props)=>{
  return(
    <p>{props.name} {props.exercise}</p>
  )
}


const Content =(props)=>{
  
  return(
   <>
     <Part name = {props.part1.name}  exercise ={props.part1.exercises}/>
     <Part name = {props.part2.name}  exercise ={props.part2.exercises}/>
     <Part name = {props.part3.name}  exercise ={props.part3.exercises}/>
   </>
  
  )
 
 
}

const Total = (props)=>{

  const number = props.exercises1+props.exercises2+props.exercises3;

  return (
      
      <p>Number of exercises {number} </p>
  )
}



const App = () => {
  const [counter, Setcounter] = useState(0);
    Setcounter(counter+1)
  const course = { 
   name:'Half Stack application development',
  
    parts : [
        { 
    
            name : 'Fundamentals of React',
    
            exercises : 10,
  
        },

        {
    
            name : 'Using props to pass data',
    
            exercises : 7,
  
        },

        {

            name: 'State of a component',
    
            exercises : 14,
  
        }
]
}

return(
  <div>
    <Header course={course.name}/>
    <Content  part1={course.parts[0]}  part2={course.parts[1]}  part3 ={course.parts[2]}  />

    <Total exercises1={course.parts[0].exercises} exercises2={course.parts[1].exercises} exercises3={course.parts[2].exercises}/> 
  </div>
  )

}

export default App;

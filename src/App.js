import React, { useState,useEffect } from 'react'
import './App.css'
function App() {
  const pubgTeam=[
    {name:'KPNXPurna',kd:'2.25',job:'Assulter'},
    {name:'KPNXSajeeb',kd:'3.50',job:'Entry-Fragger'},
    {name:'KPNXRafy',kd:'1.80',job:'Supporter'},
    {name:'KPNXMehedy',kd:'1.98',job:'Main-Assulter'},
    {name:'KPNXAlamin',kd:'2.00',job:'Sniper'}
  ]
 
  return (
    <div className="App">
      <h2>I am a React Person</h2>
      <Count/>
      <Person/>
      <br/>
     <h5>Pubg-Team</h5>
    
    {
      pubgTeam.map(pubgBoy=>{
        return <KhelaPariNa pubgTeam={pubgBoy}/>
      })
    }



   
    </div>
  )
}

export default App

function KhelaPariNa(props){
  const kpnStyle={
    border:'2px solid black',
    borderRadius:'10px',
    width:'150px',
    height:'150px',
    float:'left',
    textAlign:'left',
    marginLeft:'400px',
    marginBottom:'20px',
    backgroundColor:'pink',
    padding:'10px'
  }
  const {name,kd,job}=props.pubgTeam
  return(
  
     
    <div style={kpnStyle}>
      <h5>Name:{name}</h5>
      <h4>KD:{kd}</h4>
      <h4>JOB:{job}</h4>
    </div>
   
  )

}

function Count(){
  const [count,setCount]=useState(0)
  return(
    <div>
      <h2>Count:{count} </h2>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}
function Person(){
  const [person,setPerson]=useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>{
      setPerson(data)
    })
    
  },[])
  return(
    <div>
      <h2>Dynamic Users:{person.length}</h2>
      
      <ul>

     {person.map(person=>{
       return( 
       <div>
         
         <li style={{color:'blue'}}>{`Name: ${person.name}`}</li>
         <li style={{color:'red'}}>{`Email: ${person.email}`}</li>
       </div>
       
       
        )
     })}
    
      </ul>
    </div>
  )
}
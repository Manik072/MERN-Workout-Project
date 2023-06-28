
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Post.css'

export default function Post() {
    const [title,setTitle] = useState('')
    const [reps,setReps] = useState('')                        // updating data from input fields by using useState
    const [load,setLoad] = useState('')

    const submit = async(event)=>{
        event.preventDefault();
        try{
            await axios.post("http://localhost:5000/api/workout",{                //posting data to server
                title, 
                reps,
                load
            });
            
            console.log(title+reps+load)
        }
        catch(error){
                  console.log(error)
            }
        
      }

      const [first, newdata] = useState([]);
      const url = 'http://localhost/api/workout'
      const fetchnewdata = async () => {
          const res = await fetch(url)                                  //fetching data from server using useeffect as it fetches
          const data = await res.json()                                       //data from server continuesly
          console.log(data)
          newdata(data)
      }
      console.log(first)
      
      useEffect(() => {
          fetchnewdata(url)
      })
  return (
    <div className='total'>

<div>

{
  first.map((elem)=>(
      <div className='card-main'>
      <h2>Title : {elem.title}</h2>      
      <h2>Reps : {elem.reps}</h2>
      <h2>Load : {elem.load} kg</h2>
    </div>
  ))
}

</div>
    

            <div className='center-form'>
      <form onSubmit={submit}>
      <div className="mb-3">
    <label for="example1Reps" className="form-label">Enter Title</label>
    <input type="text" className="form-control" value={title} id="example1Reps" onChange={(event)=>{setTitle(event.target.value)}}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  
  <div className="mb-3">
    <label for="exampleReps" className="form-label">Enter Reps</label>
    <input type="text" className="form-control" value={reps} id="exampleReps" onChange={(event)=>{setReps(event.target.value)}}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Enter Load</label>
    <input type="text" className="form-control" value={load} id="exampleInputPassword1" onChange={(event)=>{setLoad(event.target.value)}}/>
  </div>
  <div className='text-center'>
  <button type="submit" className="btn btn-success">Submit</button>
  </div>
 
</form>
    </div>
    </div>

  )
}

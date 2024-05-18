
import './App.css';
import {useEffect, useState} from 'react';


function App() {

        
      const [formData,setformData]=useState({
        firstname:"",
        lastname:"",
        email:"",
        isVisible:false,
        mode:"",
        favcar:""
      })

      function changeHandler(event){
        const {name,value,checked,type}=event.target
        setformData(prevformData=>{
          return {
            ...prevformData,
            [name]:type==='checkbox' ? checked : value
          }
        });


      }


      function submitHandler(event){
        event.preventDefault();
        console.log(formData);
      }
   
  

  return (

    
    <div style={{
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    }}>



        <form onSubmit={submitHandler}>

          <input type="text" placeholder="first name" name="firstname" onChange={changeHandler} value={formData.firstname}/>
          <br></br>
          <br></br>
          <input type="text" placeholder="last name" name="lastname" onChange={changeHandler} value={formData.lastname}/>
          <br></br>
          <br></br>
          <input type="text" placeholder="email" name="email" onChange={changeHandler} value={formData.email}/>
          <br></br>
          <br></br>

          <input type="checkbox" name="isVisible" id="isVisible" onChange={changeHandler} checked={formData.isVisible}/>
          <label htmlFor='isVisible'>Am I visible</label>
          <br></br>
          <br></br>

          <input type="radio" name="mode" id="offline" value="offline-mode" onChange={changeHandler} checked={formData.mode==='offline-mode'}/>
          <label htmlFor='offline'>Offline</label>

          <input type="radio" name="mode" id="online" value="online-mode" onChange={changeHandler} checked={formData.mode==='online-mode'}/>
          <label htmlFor='online'>Online</label>
          
          <br/>
          <br/>

          <select name="favcar" id="favcar" value={formData.favcar} onChange={changeHandler}>
            <option value="thar">Thar</option>
            <option value="Porchee">Porchee</option>
            <option value="G-Wagon">G-Wagon</option>
            <option value="Venue">Venue</option>
            <option value="Mustang">Mustang</option>           
          </select>

          <br></br>
          <br></br>
          <button>submit</button>
        </form>

        

      </div>




  );  
}

export default App;

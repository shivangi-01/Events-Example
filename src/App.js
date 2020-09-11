//example of state
import React from 'react';
import {useState} from 'react';
import './App.css';
import SpreadOperator from './SpreadOperator';
import EventExample from './EventExample';

const App =()=> {
  const[fullName,setFullName]=useState({
    fname: "",
    lname: "",
    email:"",
    phone:"",
  });
  // const[fullName,setFullName]=useState();
  // const[lastName,setLastName]=useState();
  // const [lastname,setLastNameNew]=useState();
  const inputEvent=(event)=>{
    //console.log(event.target.value);
    //setName(event.target.value);
 
    // const value=event.target.value;
    // const name=event.target.name; //another method to do this is through array destructing
    const {value,name}=event.target; //array destructing
    setFullName((preValue)=>{
 //use of spread operator
console.log(preValue);
return{
  ...preValue,
  [name]:value,
};
//end of spread operator statement

     //console.log(preValue);
    //  if(name==="fname"){
    //    return{
    //    fname:value,
    //    lname:preValue.lname,
    //    email:preValue.email,
    //    phone:preValue.phone
    //    };
    //  }else if(name==="lname"){
    //    return{
    //      fname:preValue.fname,
    //      lname:value,
    //      email:preValue.email,
    //      phone:preValue.phone
    //    };
    //  }
    //  else if(name==="email"){
    //   return{
    //     fname:preValue.fname,
    //     lname:preValue.lname,
    //     email:value,
    //     phone:preValue.phone
        
    //   };
    // }
    // else if(name==="phone"){
    //   return{
    //     fname:preValue.fname,
    //     lname:preValue.lname,
    //     email:preValue.email,
    //     phone:value,
    //   };
    // }
    // })

   
 
    })
  }
  const onSubmit=(event)=>{
    event.preventDefault();
    alert('form submitted');
    // setFullName(name);
    // setLastNameNew(lastName);
  }
  
//   const inputEventTwo=(event)=>{
// setLastName(event.target.value);
//   }
  return (
   <>
  
   <div style={{display: 'flex', justifyContent: 'center'}}>
     <form onSubmit={onSubmit}>
     <p>
  <center><p><b>Hello {fullName.fname}{fullName.lname}</b> </p><br/>
  <p>{fullName.email}</p>
  <p>{fullName.phone} </p>
  </center>
     </p>
    
       <center>
     <input type='text' placeholder="Enter Your name" value={fullName.fname} name='fname'  onChange={inputEvent} /><br/>
     <input type='text' placeholder="Enter Your lastname" value={fullName.lname} name='lname' onChange={inputEvent}/><br/>
     <input type='text' placeholder="Enter Your Email" value={fullName.email} name='email'  onChange={inputEvent} /><br/>
     
     <input type="number" placeholder="Enter Your number" value={fullName.phone} name='phone'  onChange={inputEvent} /><br/>
     <button  onClick={onSubmit}> click me 👍</button><br/>
     </center>
     <div>
     <SpreadOperator/>
     {/* //to see use of events uncomment EventExample
     <EventExample/> */}
     </div>
     </form><br/>
   
   </div>


   </>
   
 
  );
  
}


export default App;

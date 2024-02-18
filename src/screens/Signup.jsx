import React,{useState} from 'react'
import{Link} from 'react-router-dom';

export default function Signup() {
 const [credentials,setCredentials] = useState({name:'',email:'',password:'',location:''});
 

  const handleSubmit= async(e)=>{
      e.preventDefault();
      const response = await fetch("http://localhost:5000/api/createuser",{
        method:"POST",
        headers:{
        'Content-Type':'application/json'


        },
        body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.location})
      });
      const json=await response.json()
      //console.log(json);
      if(!json.success){
        alert("enter valid credential");
      }
     
         
    

  }
  const onChange=(e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})
  
    }

  return (
    <div className=' bg-dark' style={{height:"100vh"}}>
    <div className='container ' style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
       <form onSubmit={handleSubmit}>
  <div class="form-group">
    <label for="exampleInputEmail1 " className='text-primary'>Name</label>
    <input type="text" class="form-control" name='name'  value={credentials.name} onChange={onChange} />
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1" className='text-primary'>Email</label>
    <input type="email" class="form-control"  name='email'  value={credentials.email}  onChange={onChange}/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1" className='text-primary'>Password</label>
    <input type="password" class="form-control" name='password'  value={credentials.password}  onChange={onChange}/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1" className='text-primary'>Location</label>
    <input type="text" class="form-control" name='location'  value={credentials.location} onChange={onChange}/>
   
  </div>
  <br></br>
  <button type="submit" class="btn btn-success bg-color-black" >Submit</button>
  <Link to ="/login" className=' m-3 btn btn-success'> Already a user</Link>
</form>
</div>
    </div>
  )
}
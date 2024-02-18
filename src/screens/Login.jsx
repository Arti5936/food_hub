import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';

export default function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate= useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter valid credentials");
    }                                                
    if(json.success){
      localStorage.setItem("authToken",json.authToken);
      console.log(localStorage.getItem("authToken"));
      navigate("/")
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  return (
    <div className='bg-dark' style={{ height: "100vh" }}>
      <div className='container' style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1" className='text-primary'>Email</label>
            <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className='text-primary'>Password</label>
            <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <br></br>
          <button type="submit" className="btn btn-success bg-color-black">Submit</button>
          <Link to="/signup" className='m-3 btn btn-success'>I am a new user</Link>
        </form>
      </div>
    </div>
  );
}

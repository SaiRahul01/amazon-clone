import React,{useState,useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import './Login.css';
import {auth,db,provider} from "../firebase";
import { signInWithPopup } from 'firebase/auth';

export default function Login() {
    const [email, setemail] = useState('')
    const [pwd, setpwd] = useState('')
    let navi=useNavigate()

    const signinwithcreds=(e)=>{

      auth.createUserWithEmailAndPassword(email,pwd).then((auth)=>{
        console.log(auth);
      }).catch(err=>alert(err))

      e.preventDefault()

    }

    const loginwithgoogle=(e)=>{
      signInWithPopup(auth,provider).then((result)=>{
        console.log(result);
       
        navi("/")
      })


      e.preventDefault()

    }


  return (
   
    <div className='loginpage'>

      <div className="imagelogo">
        <Link to="/"><img className='ded' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png" alt="" /></Link>
      </div>
        <div className="card">
            <h3 className='text-center logintitle'>Login</h3>
            <div className="signinform">
            <span>Email</span>
              <input className='emailfield' type="email" onChange={e=>setemail(e.target.value)}></input>
              <span>Password</span>
              <input className='passwordfield' onChange={e=>setpwd(e.target.value)} type="password"></input>
              <button className="signinwithcredbtn" onClick={signinwithcreds}>Sign in</button><br />
              <h5 className='orname'>OR</h5>

            </div>

            <button onClick={loginwithgoogle} className="loginbuttonwithgoogle">
              <div className='loginwithgoogletext'>
              Login with Google 
                </div> 
                <div>
                <img className='googleicon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/36px-Google_%22G%22_Logo.svg.png?20210618182606" alt="" /> 

                </div>
               </button>
        </div>

    </div>
  )
}

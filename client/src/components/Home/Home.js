import React, { useEffect } from 'react'
import './Home.css'
import { NavLink, useNavigate} from 'react-router-dom';
import { IoMdLock } from "react-icons/io";
import { useSelector } from 'react-redux';
function Home() {
  let {islogedin,currentUser}=useSelector(state=>state.userAuthorLoginReducer)
  let navigate=useNavigate()
  useEffect(()=>{
    if(islogedin){
      if(currentUser.userType==='author'){
        navigate('author-profile/articles')
      }else if(currentUser.userType==='user'){
        navigate('user-profile')
      }
    }
  },[])
  return (
    <div className='home'>
      <div class="card">
        <h1>
        Your blog is your unedited version of yourself</h1>
      </div>
      <div class="card">
      <pre className='homepage'>
        <IoMdLock />Please <NavLink  to='signin' style={{color:'black'}} >Login</NavLink> To Continue</pre></div>

    </div>
  )
}

export default Home
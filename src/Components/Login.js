import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { redirect } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



const Login = () => {
  const navi=useNavigate()
    const [emai,setemail]=useState()
    const [pa,setpa]=useState()
  const [password,npassword]=useState()
  const [cpassword,copassword]=useState()
  const [unshow,show]=useState(true)
//   const data1=["abhishek2019kr@gmail.com","abhi123@gmail.com"]
const data1=[
    {
        em:"abhishek2019kr@gmail.com",
        p:"abhi123@"
    },
    {
        em:"abhishek2020kr@gmail.com",
        p:"abhi123@"
    },
]
  
const { register, handleSubmit, watch, formState: { errors } } = useForm();
const handleRegistration = () =>
{
   
    // data.preventDefault()
    
    let res=data1.filter((e)=>{
        if (e.em===emai && e.p===password )
        {
            return e.em
        }

    })
    console.log(emai)
    console.log(password)
    console.log(res)
    if (res.length===1)
    {
      // alert("successfully login")
       navi('/news');
     
    }
    else{
      console.log("not allowed")
    }
   
    

}
// const handleSubmit=()=>{
//     console.log("dfdf")

// }
// const onSubmit = data => console.log(data);

    
  return (
    <div className='d-flex justify-content-center main'>
      
    <div className="signup-box  my-5">
      <h1>Login</h1>
      
      <form onSubmit={handleSubmit(handleRegistration)}>
        
        
        <label className='h5' htmlFor="">
          Email
        </label>
        <input type="email" {...register('userid', { required: true })} value={emai} onChange={(e)=>setemail(e.target.value)}  />
        {errors.userid && errors.userid.type === "required" && <span className='text-danger h6'>Email is required</span>}
         
       

        <label className='h5'>Password</label>
       <input type="password" id="p1" value={password} {...register('password', { required: true, minLength:8 })}
       onChange={e => {
        npassword(e.target.value)
    
}}
       
       
        />
      {errors.password && errors.password.type === "required" && <span className='text-danger h6'>password is required</span>
      
      
      }
      {errors.password && errors.password.type === "minLength" && <span className='text-danger h6'>Minimum 8 characters</span> }
      
     
      
        
        {/* confirm password */}
        
        
       
       {/* <input type="password" id="p2" value={cpassword}   {...register('password', { required: true, maxLength: 30 })}
      onChange={e => {
       pvlaidate(e.target.value)
    
}}
/> */}

{/* <div>
{
  
  unshow  && <p>password not match</p>

}
</div> */}




       
      {errors.password && errors.password.type === "required" && <span className='text-danger h6'>password is required</span>}
      {errors.password && errors.password.type === "maxLength" && <span className='text-danger h6'>Max length exceeded</span> }
      <div className='text-center'>  <button type='submit' className='mt-3  sub'>Submit</button></div>

     
     </form>
   
    </div>
   
  

      

    </div>
  )
}

export default Login

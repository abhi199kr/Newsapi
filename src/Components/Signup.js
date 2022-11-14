import React, { useState } from 'react'
import { useForm } from "react-hook-form";


const Signup = () => {
  const [password,npassword]=useState()
  const [email,setemail]=useState()
  const [cpassword,copassword]=useState()
  const [unshow,show]=useState(true)
  
    const { register, handleSubmit, formState: { errors } ,watch} = useForm();
const handleRegistration = (data) =>
{
  const Datas=[]
   Datas=[...Datas,{em:email,pa:password}]
    console.log("Data");
    console.log(email)
    console.log(password)
    console.log(Datas)

}

    
  return (
    <div className='d-flex justify-content-center main'>
      
    <div className="signup-box  my-5">
      <h1>Sign Up</h1>
      
      <form onSubmit={handleSubmit(handleRegistration)}>
        <label className='h5' >First Name</label>
        <input type="text" id="fname" {...register('fname', { required: true, maxLength: 30 })} />
      {errors.fname && errors.name.type === "required" && <span className='text-danger h6'>First Name is required</span>}
      {errors.fname && errors.name.type === "maxLength" && <span className='text-danger h6'>Max length exceeded</span> }
        
        
        <label className='h5'>Last Name</label>
        <input type="text" id="name" {...register('name', { required: true, maxLength: 30 })} />
      {errors.name && errors.name.type === "required" && <span className='text-danger h6'>This is required</span>}
      {errors.name && errors.name.type === "maxLength" && <span className='text-danger h6'>Max length exceeded</span> }

        <label className='h5' htmlFor="">
          Email
        </label>
        <input type="email"  name="email" {...register('email', { required: true, maxLength: 30,
        pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Entered value does not match email format"
          } })}
          onChange={(e)=>setemail(e.target.value)}
     />
         {errors.email && <span className='text-danger h6' role="alert">{errors.email.message} <span className='text-danger h6'>email is required</span></span>}
       

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
        <label className='h5'>Confirm Password</label>

        <input
 {...register("confirm", {
  required: true,
  validate: (val) => {
    if (watch('password') != val) {
      return "password does not match";
    }
  },
 })}
/>
{errors.confirm && <span className='text-danger h6' role="alert">{errors.confirm.message} </span>}


        
       
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

export default Signup

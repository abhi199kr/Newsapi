import React from 'react'
import "./Dashboard.css"
import { Link } from 'react-router-dom'
const Dashboard = () => {
  return (
    <div className=' bgd'>
    {/* Header section */}
    <div className="d-flex ma shadow py-3 ">
        <h1 className='bg-info p-2 text-light'>
            News <span className='bg-light p-1 text-info'>Api</span>
        </h1>
      <div className='log'>
      <Link to="/login">
        <button className='bt px-3 py-2'>Login</button>
        </Link>
      </div>
    </div>

    <div>
   
      <h1 className='fo'>World Latest news get after login </h1>
      
    </div>
      
    </div>
  )
}

export default Dashboard

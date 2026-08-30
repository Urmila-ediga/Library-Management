import React,{useState} from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {

  return (
    <>
      <div className="nav">
        <div className="left">
          <h2>Logo</h2>
        </div>
        <div className="right">
          <Link className='link' to={"/"}><h2>Home</h2></Link>
          <Link className='link' to={"/addbook"}><h2>Add</h2></Link>
          <Link className='link' to={"/viewbook"}><h2>View</h2></Link>
        </div>
      </div>

    </>
  )
}

export default Navbar
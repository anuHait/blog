import React from 'react'
//import {categor} from './data'
import './catogories.css'
import {Link} from 'react-router-dom';
function Categories() {
  return (
    <div>
    <Link to="/create">
    <button type="button" className="buttn ">New Blog</button>
    </Link>
    <table className="table table-hover table-bordered border-secondary">
    <thead>
    <tr>
      <th scope="col">All Categories</th> 
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Music</td>  
    </tr>
    <tr>
      <td>Movies</td>
    </tr>
    <tr>
      <td>Sports</td>
    </tr>
    <tr>
      <td>Technology</td>
    </tr>
    <tr>
      <td>Fashion</td>
    </tr>
  </tbody>
</table>
    
    </div>
  )
}

export default Categories

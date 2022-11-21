import React from 'react'
//import {categor} from './data'
import './catogories.css'
import {Link,useMatch,useResolvedPath} from "react-router-dom";
function Categories() {
  return (
    <div>
    <CustomLink to ="/createpost" >
    <button type="button" className="buttn ">New Blog</button>
    </CustomLink>
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
function CustomLink({to,children,...props})
{
    const resolvedpath=useResolvedPath(to);
    const isActive=useMatch({path:resolvedpath.pathname,end:true})
    return(
        <li className={isActive? "active":""}>
        <Link to={to} {...props}>
        {children}
        </Link>
        </li>
    )
}
export default Categories

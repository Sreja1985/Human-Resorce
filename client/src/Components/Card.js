import React from 'react'
import './Card.css';
import {Link} from 'react-router-dom';

function Card(employee) {
  return (
    <article className='employee__card'>
      <img className={employee.color} src={employee.src} alt={employee.alt} />
        <Link className='person' to={employee.read}>
          <h4>{employee.firstName} {employee.lastName}</h4>
        </Link>
        <div>{employee.department}</div>
        <div className='action'>
            <Link to={employee.url} className='text-decoration-none btn btn-success'>Update</Link>
            <button onClick={employee.onClick} className='btn btn-danger'>Delete</button>
        </div>
      
    </article>
  )
}

export default Card

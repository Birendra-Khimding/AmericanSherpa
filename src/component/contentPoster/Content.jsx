import React from 'react'
import './content.css'
import { Link } from 'react-router-dom'


const Content = (props) => {
  return (
    <Link to={props.link}>
      <div className="poster">
        <img src={props.imageUrl} alt={props.title} />
        <h2>{props.title}</h2>
        <p className='largeScreen'>{props.paragraph}</p>
        <p className='midScreen'>{props.paragraph.slice(0, 150)}</p>
        <p className='smallScreen'>{props.paragraph.slice(0, 100)}</p>
      </div>
    </Link>
  )
}

export default Content
import React from 'react'
import { newsdata } from './newsdata'

const Links = () => {
  return (
    <div className='Links'>
        {newsdata.links.map((link)=>{
            return(
                <li className='linklist'>{link.title}</li>
            )
        })}
    </div>
  )
}

export default Links

import React from 'react'
import Image from 'next/image'

const MainNews = () => {
  return (
    <div>
        <div>
           <Image/> 
           <div>
            <h2>{news.title}</h2>
            <span>
              <span>{news.date}</span>
              <span>{news.author}</span>
            </span>
           </div>
        </div>
        
    </div>
  )
}

export default MainNews
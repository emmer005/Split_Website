import React from 'react'
import Image from 'next/image'

interface type {
    title: string,
    subText: string,
    tailwindStyle?: string
    imagePath: string
}

const Autobox = (props: type) => {
  return (
    <div className={`${props.tailwindStyle} p-6 justify-between grid items-center`} >
    <div>
      <h1 className=" text-3xl font-bold">{props.title}</h1>
      <p >
        {props.subText}
      </p>
    </div>
    <div className=" flex justify-center items-center">
      <Image
        width={100}
        height={100}
        className="w-40 font-light italic aspect-square object-contain"
        src={props.imagePath}
        alt={props.title}
      />
    </div>
  </div>
  )
}

export default Autobox
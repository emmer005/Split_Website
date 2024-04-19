import React from 'react'
import Image from 'next/image'
import styles from './Autobox.module.scss'

interface type {
    title: string,
    subText: string,
    tailwindStyle?: string
    imagePath: string
}

const Autobox = (props: type) => {
  return (
    <div className={`${props.tailwindStyle} rounded-md p-6 justify-between grid items-center`} >
    <div>
      <h1 className={` ${styles.supText} text-3xl font-bold`}>{props.title}</h1>
      <p className={` ${styles.subText}`} >
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
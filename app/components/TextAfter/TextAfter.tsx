import React from 'react'
import styles from './TextAfter.module.scss'
interface type{
    name: string
}
const TextAfter = (props: type) => {
  return (
    <span className=" w-full grid items-center justify-center h-fit relative">
    <h1 className={`${styles.supText} ${styles.textBefore} w-fit text-center `}> {props.name} </h1>
    </span>
  )
}

export default TextAfter
import { forwardRef } from 'react'
import classes from './Input.module.css'


export const Input = forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
        <label htmlFor=''>{props.input.id}</label>
        <input ref={ref} {...props.input}/>
    </div>
  )
}) 

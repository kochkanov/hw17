import classes from './Header.module.css'
import { Fragment } from 'react'
import mealsImage from '../../assets/meals.jpg'
import { HeaderCardButton } from './HeaderCardButton';


export const Header = ( props) => {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCardButton onShowMod={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='food'/>
        </div>
    </Fragment>
  )
}

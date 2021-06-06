import { Fragment } from 'react'
import foodImage from '../../assets/pizza.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <Fragment >
            <header className={classes.header}>
                <h1> Take Meal </h1>
                <HeaderCartButton/>
                <button> Cart </button>
            </header>
            <div className={classes['main-image']}>
                <img src={foodImage} alt="food in the table" />
             </div>


        </Fragment>
    )
}




export default Header;
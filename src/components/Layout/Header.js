import react from "react";

import HeaderCartButton from "./HeaderCartButton";

import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';


const Header = props => {
    return <react.Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="A table full of delicious food."/>
        </div>
    </react.Fragment>
};

export default Header;
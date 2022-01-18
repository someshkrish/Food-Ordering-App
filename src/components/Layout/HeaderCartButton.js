import { useContext, useEffect, useState } from 'react';

import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

import CartContext from '../../store/cart-context';

const HeaderCartButton = props => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    //This component will be re-evaluated whenever the cart context changes by cartProvider
    const cartCtx = useContext(CartContext);

    //reduce() -> will convert an array into a single number accets a function and the starting index as a parameter. The function parameter in itself receives two parameter one is the calculated value(initial 0 for the first call and after that it is the value returned in the previous call) and the other one is the current item itself.
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    const {items} = cartCtx;

    useEffect(() => {
        if(items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);;
        }
    }, [items]);

    return <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {numberOfCartItems}
        </span>
    </button>
};

export default HeaderCartButton;
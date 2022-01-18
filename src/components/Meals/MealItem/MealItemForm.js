import { useRef, useState } from 'react';

import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = props => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value; // This is a string 
        const enteredAmountNumber = +enteredAmount; //This converts the string to a number

        //Simple validation
        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 0 || enteredAmountNumber > 5){
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNumber);
    }

    //Since Input is a custom component useRef won't work out of the box.
    //So the Input component has to be enclosed within the React.forwardRef() which gives access the 'ref' as the second parameter and we can assign it to the 'ref' property in the <input ref={ref}> tag like that.
    return <form className={classes.form} onSubmit={submitHandler}>
        <Input 
            ref = {amountInputRef}
            label="Amount" 
            input={{
                id: 'amount_' + props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }}
        />
        <button>+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
};

export default MealItemForm;
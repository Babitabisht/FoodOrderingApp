import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import {useRef, useState} from 'react';

const MealItemForm=(props)=>{

    const [isFormValid, setIsFormValid] = useState(false);

    const amountInputRef = useRef();

    const formSubmitHandler=(event)=>{

      event.preventDefault();
      let enteredAmount=  amountInputRef.current.value;
      let enteredAmountNumber = +enteredAmount;
      if(enteredAmountNumber === 0 || enteredAmountNumber<0){
        setIsFormValid(true);
      }
      props.onAddAmount(enteredAmountNumber);

    }

    return (
        <form  onSubmit={formSubmitHandler} className={classes.form}>  
            <Input 
            ref={amountInputRef}
            input={{
                type : 'number',
                id : 'amount',
                min: '1',
                max : '5',
                step : '1',
                defaultValue : '1'

            }} label="Amount" />
            <button> +Add </button>
            {!isFormValid && <p>Please Enter valid amount </p>}
        </form>
    );
}


export default MealItemForm;
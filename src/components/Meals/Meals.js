import AvailableMeals from './AvailableMeals';
import MealsSummary from './MealsSummary';
import {Fragment} from 'react';

const Meal =(props)=>{
    return(
        <Fragment>
          <AvailableMeals/>
          <MealsSummary/>

        </Fragment>
    )
    
}



export default Meal;
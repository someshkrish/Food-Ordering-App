import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import react from "react";

const Meals = () => {
    return <react.Fragment>
        <MealsSummary />
        <AvailableMeals />
    </react.Fragment>
};

export default Meals;
import MealItem from './MealItem';
import useHttp from '../hooks/useHttp';
import Error from './Error';

const requestConfig = {};

export default function Meals() {
    const {
        data: loadedMeals,
        isLoading,
        error
    } = useHttp('https://food-order-app-w7np.onrender.com/meals',requestConfig, []);

    if(isLoading){
        return <p className='center'>Fetching meals...</p>;
    }
    if(error){
        return (<Error title="Failed to fetch meals" message={error} />);
    }

    return (
        <ul id="meals">{loadedMeals.map((meal) => (
            <MealItem key={meal.id} meal={meal} />
        ))}
        </ul>
    );
}
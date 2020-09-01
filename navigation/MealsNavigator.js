import {
    createStackNavigator,
    createAppContainer,
} from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    Meals: CategoryMealsScreen,
    MealDetails: MealDetailsScreen,
});

export default createAppContainer(MealsNavigator);

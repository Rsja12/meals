import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';

createStackNavigator({
    Categories: CategoriesScreen,
    Meals: CategoryMealsScreen,
    MealDetails: MealDetailsScreen
});

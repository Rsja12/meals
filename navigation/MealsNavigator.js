import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import { DarkTheme } from '@react-navigation/native';

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    Meals: CategoryMealsScreen,
    MealDetails: MealDetailsScreen,
});

export default createAppContainer(MealsNavigator);

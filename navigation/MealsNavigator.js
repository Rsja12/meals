import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen'

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    Meals: CategoryMealsScreen,
    MealDetails: MealDetailsScreen,
});

const MealsTabNavigator = createBottomTabNavigator({
    Meals: MealsNavigator,
    Favorites: FavoritesScreen
});

export default createAppContainer(MealsNavigator);

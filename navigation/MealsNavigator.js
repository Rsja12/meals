import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    Meals: CategoryMealsScreen,
    MealDetails: MealDetailsScreen,
});

const MealsTabNavigator = createBottomTabNavigator(
    {
        Meals: {
            screen: MealsNavigator,
            navigationOptions: {
                tabBarIcon: (tabInfo) => {
                    return (
                        <Ionicons
                            name='ios-restuarant'
                            size={25}
                            color={tabInfo.tintColor}
                        />
                    );
                },
            },
        },
        Favorites: {
            screen: FavoritesScreen,
            navigationOptions: {
                
            }
        },
    },
    {
        tabBarOptions: {
            activeTintColor: '#000000',
        },
    }
);

export default createAppContainer(MealsTabNavigator);

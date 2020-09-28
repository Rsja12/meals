import React from 'react';
import { StyleSheet, Text, FlatList, View } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem'

const CategoryMealsScreen = (props) => {
    const categoryId = props.navigation.getParam('categoryId');
    const displayedMeals = MEALS.filter(
        (meal) => meal.categoryIds.indexOf(categoryId) >= 0
    );

    const renderMealItem = itemData => {
        return (
            <MealItem 
                onSelect={() => {}}
                title={itemData.item.title} 
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
            />
        )
    }

    return (
        <View style={styles.screen}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{width: '100%'}}
            />
        </View>
    );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const categoryId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(
        (category) => category.id === categoryId
    );

    return {
        headerTitle: selectedCategory.title,
    };
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';

const CategoryMealsScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Category Meal Screen</Text>
            <Button
                title='View Details'
                onPress={() => props.navigation.navigate('MealDetails')}
            />
        </View>
    );
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

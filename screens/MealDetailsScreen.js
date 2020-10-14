import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { MEALS } from 

const MealDetailsScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Meal Details</Text>
        </View>
    );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

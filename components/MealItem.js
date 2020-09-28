import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const MealItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onSelect}>
            <View>
                <View style={styles.mealRow}>
                    <Text>{props.title}</Text>
                </View>
                <View style={styles.mealRow}>
                    
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default MealItem;

const styles = StyleSheet.create({
    mealRow: {
        flexDirection: 'row'
    }
});

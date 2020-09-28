import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const MealItem = (props) => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelect}>
                <View>
                    <View style={styles.mealRow}>
                        <Text>{props.title}</Text>
                    </View>
                    <View style={styles.mealRow}></View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#ccc'
    },
    mealRow: {
        flexDirection: 'row',
    },
});

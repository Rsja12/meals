import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const CategoryGridTile = ({ title, onSelect, color }) => {
    return (
        <TouchableOpacity style={styles.gridItem} onPress={() => onSelect()}>
            <View
                style={{ ...styles.container, ...{ backgroundColor: color }}}
            >
                <Text>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
    },
    container: {
        flex: 1,
    },
});

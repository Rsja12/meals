import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const CategoryGridTile = (props) => {
    return (
        <TouchableOpacity
            style={styles.gridItem}
            onPress={() =>
                props.navigation.navigate('Meals', {
                    categoryId: itemData.item.id,
                })
            }
        >
            <View>
                <Text>{itemData.item.title}</Text>
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
});

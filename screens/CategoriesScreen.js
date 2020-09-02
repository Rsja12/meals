import React from 'react';
import { StyleSheet, Text, Button, FlatList, View } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const renderGridItem = (itemData) => {
    return <View><Text>{itemData.item.title}</Text></View>;
};

const CategoriesScreen = (props) => {
    return (
        <FlatList
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}
        />
    );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

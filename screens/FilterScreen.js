import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const FilterScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Filter Screen</Text>
        </View>
    )
}

FilterScreen.navigationOptions = {
    headerTitle: 'Filter Meals'
}

export default FilterScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

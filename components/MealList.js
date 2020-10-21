import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'

const MealList = (props) => {
    return (
        <View style={styles.screen}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{ width: '100%' }}
            />
        </View>
    )
}

export default MealList

const styles = StyleSheet.create({
    
})

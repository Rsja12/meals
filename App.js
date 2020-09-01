import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import MealsNavigator from './navigation/MealsNavigator'

const fetchFonts = () => {
    Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    });
};

export default function App() {
    const [isFontLoaded, setIsFontLoaded] = useState(false);

    if (!isFontLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setIsFontLoaded(true)}
            />
        );
    }

    return <MealsNavigator />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import MenuItemDetailScreen from '../screens/MenuItemDetailScreen'
import BottomNavigationLocal from './BottomNavigationLocal'

const MainNavigation = () => {
    const Stack = createNativeStackNavigator();

    const navTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: 'transparent',
        }
    }
    return (
        <NavigationContainer theme={navTheme}>
            <StatusBar animated={true} style='auto' />
            <Stack.Navigator screenOptions={{ animation: "slide_from_left" }} initialRouteName='BottomNavigation' >
                <Stack.Screen name="BottomNavigation" component={BottomNavigationLocal} options={{ headerShown: false }} />
                <Stack.Screen name="MenuItemDetail" component={MenuItemDetailScreen} options={{
                    headerTransparent: true, title: '',headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation

// headerStyle: {
//     backgroundColor: '#f4511e',
//   },
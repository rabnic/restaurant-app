import { View, Text } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import MenuItemDetailScreen from "../screens/MenuItemDetailScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import BottomNavigationLocal from "./BottomNavigationLocal";
import CartHeaderIcon from "../components/CartHeaderIcon";
import { CartContext } from "../contexts/CartContext";

const MainNavigation = () => {
  const Stack = createNativeStackNavigator();
  const { cart, setCart } = useContext(CartContext);
  const [cartCounter, setCartCounter] = useState(0);
  const totalQuantity = cart.reduce((total, currentItem) => {
    return total + currentItem.quantity;
  }, 0);

  //custom cheat function to navigate to a nested navigator stack screen
  const goToCartFromDetailScreen = () => {};

  useEffect(() => {
    // const totalQuantity = cart.reduce((total, currentItem) => {
    //     return total + currentItem.quantity;
    // }, 0);
    // setCartCounter(totalQuantity);
  }, [cart]);

  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "transparent",
    },
  };
  return (
    <NavigationContainer theme={navTheme}>
      <StatusBar animated={true} style="auto" />
      <Stack.Navigator
        screenOptions={{ animation: "slide_from_left" }}
        initialRouteName="BottomNavigation"
      >
        <Stack.Screen
          name="BottomNavigation"
          component={BottomNavigationLocal}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MenuItemDetail"
          component={MenuItemDetailScreen}
          options={({ navigation }) => ({
            headerTransparent: true,
            title: "",
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <CartHeaderIcon
                totalQuantity={totalQuantity}
                navigation={navigation}
              />
            ),
          })}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            headerTransparent: true,
            title: "",
            headerTintColor: "#777",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={({ navigation }) => ({
            headerTransparent: true,
            title: "",
            headerTintColor: "#777",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;

// headerStyle: {
//     backgroundColor: '#f4511e',
//   },

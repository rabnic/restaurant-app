import { View, Text } from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { BottomNavigation, useTheme } from "react-native-paper";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import SignInScreen from "../screens/SignInScreen";
import UserProfile from "../screens/UserProfile";
import { CartContext } from "../contexts/CartContext";
import PaymentScreen from "../screens/PaymentScreen";


const BottomNavigationLocal = ({ route, navigation }) => {
    const {cart, setCart} = useContext(CartContext)
    const [cartCounter, setCartCounter] = useState(0);

    useEffect(() => {
        const totalQuantity = cart.reduce((total, currentItem) => {
            return total + currentItem.quantity;
        }, 0);
        const updatedRoutes = routes;
        updatedRoutes[1].badge = totalQuantity;
        setRoutes(updatedRoutes)
        setCartCounter(totalQuantity);
    }, [cart]);

  const [index, setIndex] = useState(0);
  const [routes, setRoutes] = useState([
    {
      key: "home",
      title: "Home",
      focusedIcon: "home",
      unfocusedIcon: "home-outline",
    },
    {
      key: "cart",
      title: "Cart",
      focusedIcon: "cart",
      unfocusedIcon: "cart-outline",
      badge: cartCounter
    },
    {
      key: "favorites",
      title: "Favorites",
      focusedIcon: "heart",
      unfocusedIcon: "heart-outline",
    },
    {
      key: "profile",
      title: "Profile",
      focusedIcon: "account",
      unfocusedIcon: "account-outline",
    },
  ]);

  const theme = useTheme();
  theme.colors.secondaryContainer = "transparent";

  const renderScene = BottomNavigation.SceneMap({
    home: () => <HomeScreen navigation={navigation}  />,
    cart: CartScreen,
    favorites: PaymentScreen,
    profile: UserProfile,
  });
  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: "#F4E1D5" }}
      sceneAnimationEnabled={true}
      activeColor="#DD5A44"
    />
  );
};

export default BottomNavigationLocal;

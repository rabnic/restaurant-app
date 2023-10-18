import { View, Text } from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { BottomNavigation, useTheme } from "react-native-paper";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import SignInScreen from "../screens/SignInScreen";
import UserProfile from "../screens/UserProfile";
import { CartContext } from "../contexts/CartContext";
import PaymentScreen from "../screens/PaymentScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

const BottomNavigationLocal = ({ route, navigation }) => {
  const { cart, setCart } = useContext(CartContext);
  const [cartCounter, setCartCounter] = useState(0);
  console.log('route', route.params);

  useEffect(() => {
    const totalQuantity = cart.reduce((total, currentItem) => {
      return total + currentItem.quantity;
    }, 0);
    // Update cart icon item counter
    const updatedRoutes = routes;
    updatedRoutes[1].badge = totalQuantity;
    setRoutes(updatedRoutes);
    setCartCounter(totalQuantity);
  }, [cart]);

  const [index, setIndex] = useState(0);
useEffect(()=> {
  if(route.params?.hasOwnProperty('index')) {
    console.log('inside params index');
    setIndex(route.params.index);
  }
}, [route.params])
  const [routes, setRoutes] = useState([
    {
      key: "home",
      title: "Home",
      screen: "Home",
      focusedIcon: "home",
      unfocusedIcon: "home-outline",
    },
    {
      key: "cart",
      title: "Cart",
      screen: "Cart",
      focusedIcon: "cart",
      unfocusedIcon: "cart-outline",
      badge: cartCounter,
    },
    {
      key: "favorites",
      title: "Favorites",
      screen: "Favorites",
      focusedIcon: "heart",
      unfocusedIcon: "heart-outline",
    },
    {
      key: "profile",
      title: "Profile",
      screen: "Profile",
      focusedIcon: "account",
      unfocusedIcon: "account-outline",
    },
  ]);

  const theme = useTheme();
  theme.colors.secondaryContainer = "transparent";

  const renderScene = BottomNavigation.SceneMap({
    home: () => <HomeScreen navigation={navigation} route={route} />,
    cart: () => <CartScreen navigation={navigation} route={route} />,
    favorites: () => <FavoritesScreen navigation={navigation} route={route} />,
    profile:() => <UserProfile navigation={navigation}/>,
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

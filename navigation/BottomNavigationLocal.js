import { View, Text } from "react-native";
import React, { useState } from "react";
import { BottomNavigation, useTheme } from "react-native-paper";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import SignInScreen from "../screens/SignInScreen";
import UserProfile from "../screens/UserProfile";

const BottomNavigationLocal = ({ route, navigation }) => {
  // console.log('route',route);
  // console.log('navigation',navigation);
  const [index, setIndex] = useState(0);
  const [routes] = useState([
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
    home: () => <HomeScreen navigation={navigation} />,
    cart: CartScreen,
    favorites: SignInScreen,
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

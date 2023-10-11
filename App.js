import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
// import HomeScreen from "./screens/HomeScreen";
// import UserProfile from "./screens/UserProfile";
// import MenuItemDetailScreen from "./screens/MenuItemDetailScreen";
// import OnboardingScreen from "./screens/OnboardingScreen";
// import CartScreen from "./screens/CartScreen";
// import SignInScreen from "./screens/SignInScreen";
// import SplashScreen from "./screens/SplashScreen";
import SignUpScreen from "./screens/SignUpScreen";

import { PaperProvider } from "react-native-paper";
import { useState } from "react";

import BottomNavigationLocal from "./navigation/BottomNavigationLocal";

import { loadFonts } from "./utils/fonts";

export default function App() {
  const fontsLoaded = loadFonts();

  if (!fontsLoaded) return null;

  return (
    <PaperProvider style={styles.container}>
      <StatusBar style="auto" />
      <BottomNavigationLocal />
      {/* <SignUpScreen /> */}
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

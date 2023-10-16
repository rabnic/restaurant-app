import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
// import HomeScreen from "./screens/HomeScreen";
// import UserProfile from "./screens/UserProfile";
import MenuItemDetailScreen from "./screens/MenuItemDetailScreen";
import OnboardingScreen from "./screens/OnboardingScreen";
// import CartScreen from "./screens/CartScreen";
// import SignInScreen from "./screens/SignInScreen";
// import SplashScreen from "./screens/SplashScreen";
import SignUpScreen from "./screens/SignUpScreen";

import { PaperProvider } from "react-native-paper";
import { StripeProvider } from "@stripe/stripe-react-native";
import { useState } from "react";
import FlashMessage from "react-native-flash-message";
import BottomNavigationLocal from "./navigation/BottomNavigationLocal";
import MainNavigation from "./navigation/StandaloneNavigation";

import { loadFonts } from "./utils/fonts";

import { CartProvider } from "./contexts/CartContext";

export default function App() {
  const fontsLoaded = loadFonts();

  if (!fontsLoaded) return null;

  return (
    <StripeProvider
      publishableKey={"publishableKey"}
      merchantIdentifier="merchant.identifier" // required for Apple Pay
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
    >
      <CartProvider>
        <PaperProvider style={styles.container}>
          <StatusBar style="auto" />
          <MainNavigation />
          {/* <OnboardingScreen /> */}
          <FlashMessage position="bottom" />
        </PaperProvider>
      </CartProvider>
    </StripeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import UserProfile from "./screens/UserProfile";
import MenuItemDetailScreen from "./screens/MenuItemDetailScreen";
import OnboardingScreen from "./screens/OnboardingScreen";
import CartScreen from "./screens/CartScreen";
import SignInScreen from "./screens/SignInScreen";
import SplashScreen from "./screens/SplashScreen";
import SignUpScreen from "./screens/SignUpScreen";

import { PaperProvider, Text } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider style={styles.container}>
      <StatusBar style="auto" />

      {/* <HomeScreen /> */}
      {/* <UserProfile /> */}
      {/* <CartScreen /> */}
      {/* <OnboardingScreen /> */}
      {/* <SignInScreen /> */}
      <SignUpScreen />
      {/* <SplashScreen /> */}
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

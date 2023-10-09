import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import UserProfile from "./screens/UserProfile";
import MenuItemDetailScreen from "./screens/MenuItemDetailScreen";
import OnboardingScreen from "./screens/OnboardingScreen";
import CartScreen from "./screens/CartScreen";

import { PaperProvider, Text } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider style={styles.container}>
      <StatusBar style="auto" />

      {/* <HomeScreen /> */}
      {/* <UserProfile /> */}
      <CartScreen />
      {/* <OnboardingScreen /> */}
    </PaperProvider>
    // <View style={styles.container}>
    //   <Text className='font-extrabold text-teal-700'>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

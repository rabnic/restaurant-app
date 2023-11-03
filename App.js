import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import { PaperProvider } from "react-native-paper";
import { StripeProvider } from "@stripe/stripe-react-native";
import { AuthProvider } from "./contexts/AuthContext";
import { UserProvider } from "./contexts/UserContext";
import { CartProvider } from "./contexts/CartContext";
import FlashMessage from "react-native-flash-message";

import { loadFonts } from "./utils/fonts";
import MainNavigation from "./navigation/StandaloneNavigation";

export default function App() {
  const fontsLoaded = loadFonts();
  const PUBLISHABLE_KEY = "pk_test_51O28R3GkBIv4HXchCkY0ATvYHcAFzXM244xd51GEwrruTHWU2QMH1lK5mKu7t2V3pW8nRJMm9hJwzbWSpOfO8KeU00Ng2VvPMj";

  if (!fontsLoaded) return null;

  return (
    <StripeProvider
      publishableKey={PUBLISHABLE_KEY}
      // merchantIdentifier="merchant.identifier" // required for Apple Pay
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
    >
      <UserProvider>
        <AuthProvider>
          <CartProvider>
            <PaperProvider style={styles.container}>
              <StatusBar style="auto" />
              <MainNavigation />
              <FlashMessage position="bottom" />
            </PaperProvider>
          </CartProvider>
        </AuthProvider>
      </UserProvider>
    </StripeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

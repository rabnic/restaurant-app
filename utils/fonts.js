import { useFonts } from "expo-font";

export const loadFonts = () => {
  const [fontsLoaded, fontError] = useFonts({
    "Lobster-Regular": require("../assets/fonts/Lobster-Regular.ttf"),
    GoodDogNew: require("../assets/fonts/GoodDogNew.ttf"),
  });
  return fontsLoaded;
};

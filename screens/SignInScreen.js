import { StyleSheet, View, SafeAreaView, Image } from "react-native";
import React, { useCallback, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Button, Text, TextInput } from "react-native-paper";
import { useFonts, Lobster_400Regular } from "@expo-google-fonts/lobster";
import * as SplashScreen from "expo-splash-screen";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

// SplashScreen.preventAutoHideAsync();

const SignInScreen = () => {
  // const [fontsLoaded, setFontsLoaded] = useState(false);
  // const [fontsLoaded, fontError] = useFonts({
  //   Lobster_400Regular,
  // });
  // const [fontsLoaded, fontError] = useFonts({
  //   "Lobster-Regular": require("../assets/fonts/Lobster-Regular.ttf"),
  //   GoodDogNew: require("../assets/fonts/GoodDogNew.ttf"),
  // });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded || fontError) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded, fontError]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <SafeAreaView
      className="flex-1 bg-[#F4E1D5] flex-col"
      // onLayout={onLayoutRootView}
    >
      <View className="flex-1 justify-center items-center">
        <Image
          resizeMode="cover"
          source={require("../assets/logos/logo-orange.png")}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <View className="flex-[2] bg-white rounded-t-3xl p-3 flex-col items-center">
        <Text
          variant="headlineLarge"
          className="my-3 p-1 tracking-widest"
          style={{ fontFamily: "Lobster-Regular" }}
        >
          Sign In
        </Text>
        <View className="flex-[2] w-full flex-col gap-4">
          <TextInput
            mode="outlined"
            label="Full Name"
            placeholder="John Doe"
            style={{ backgroundColor: "whitesmoke" }}
            underlineColor="#F4E1D5"
          />
          <TextInput
            mode="outlined"
            label="Email"
            placeholder="example@mail.com"
            className=""
            style={{ backgroundColor: "whitesmoke" }}
          />
          <TextInput
            mode="outlined"
            label="Password"
            placeholder="*******"
            style={{ backgroundColor: "whitesmoke" }}
          />
          <Text className="mt-4 self-center text-[#DD5A44]" variant="bodyLarge">
            Forgot your password?
          </Text>
        </View>
        <View className="flex-1 w-full  flex-col items-center justify-around">
          <Button
            style={{ marginTop: 55, width: "100%", fontWeight: 700 }}
            mode="contained"
            buttonColor="#DD5A44"
            uppercase={true}
            onPress={() => console.log("Pressed")}
            contentStyle={{
              marginHorizontal: 4,
              height: 50,
            }}
          >
            Sign In
          </Button>
          <Text variant="bodyLarge" className="text-[#DD5A44]">
            Don't have a account? Sign Up
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({});

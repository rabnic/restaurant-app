import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useCallback, useState, useContext } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Button, Text, TextInput } from "react-native-paper";
import { useFonts, Lobster_400Regular } from "@expo-google-fonts/lobster";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { AuthContext } from "../contexts/AuthContext";
import { getUser, signInUserWithEmailAndPassword } from "../services/firebase";
import { showMessage } from "react-native-flash-message";
import { UserContext } from "../contexts/UserContext";

const SignInScreen = ({ navigation, route }) => {
  const { user, setUser } = useContext(UserContext);
  const { authUser, updateAuthUser } = useContext(AuthContext)

  // console.log('navigation',navigation);
  console.log('route', route);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (user) {
    // navigation.goBack();
  }

  const alertMessages = {
    'INVALID_PASSWORD': 'Invalid password entered! \nPlease enter correct password',
    'INVALID_EMAIL': 'Invalid email entered! \nPlease enter correct email',
    'EMPTY_INPUTS': 'Empty inputs received! \nAll input fields are required'
  }

  const handleSignIn = async () => {
    // console.log(">>>  Login");
    setIsLoading(true);

    // if (email.trim().length < 1 || password.trim().length < 1) {
    //   Alert.alert('Sign Up Error:', alertMessages['EMPTY_INPUTS'], [
    //     { text: 'Ok', onPress: () => console.log('Sign In error Ok pressed') },
    //   ]);
    //   return;
    // }

    await signInUserWithEmailAndPassword(email.toLowerCase().trim(), password)
      .then(async (response) => {
        // console.log("signed in---", response);
        if (response.status === "success") {
          const testingUser = await getUser(response.email)
          console.log("testinguser", testingUser)
          updateAuthUser(testingUser)
          setIsLoading(false);
          showMessage({
            message: "Successfully signed in!",
            type: "success",
          });
          setTimeout(() => {
            setIsLoading(false);
            // navigation.goBack()
            if (route.params.from === "Cart") {
              navigation.navigate("Checkout")
            } else if (route.params.from === "Profile") {
              navigation.navigate("BottomNavigation", { index: 3 })
            }
          }, 1500)
        } else {
          setIsLoading(false);
          Alert.alert('Sign In Error:', response.message, [
            { text: 'Ok', onPress: () => console.log('Sign In error Ok pressed') },
          ]);
        }
      })
      .catch((error) => {
        setIsLoading(false);
      });
  };

  return (
    <SafeAreaView
      className="flex-1 bg-[#F4E1D5] flex-col h-screen"
    // onLayout={onLayoutRootView}
    >
      {/* <ScrollView className="h-screen w-full flex-col"> */}
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
            value={email}
            onChangeText={(text) => setEmail(text)}
            mode="outlined"
            label="Email"
            placeholder="example@mail.com"
            className=""
            style={{ backgroundColor: "whitesmoke" }}
          />
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            mode="outlined"
            label="Password"
            placeholder="*******"
            style={{ backgroundColor: "whitesmoke" }}
            autoCorrect={false}
            secureTextEntry
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
            loading={isLoading}
            onPress={() => handleSignIn()}
            contentStyle={{
              marginHorizontal: 4,
              height: 50,
            }}
          >
            Sign In
          </Button>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp", { ...route.params })}>
            <Text variant="bodyLarge" className="text-[#DD5A44]">
              Don't have a account? Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({});

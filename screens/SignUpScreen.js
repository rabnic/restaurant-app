import { StyleSheet, View, SafeAreaView, Image, TouchableOpacity, ScrollView, Alert } from "react-native";
import React, { useCallback, useState, useContext } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Button, Text, TextInput } from "react-native-paper";
import { useFonts, Lobster_400Regular } from "@expo-google-fonts/lobster";
import * as SplashScreen from "expo-splash-screen";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { AuthContext } from "../contexts/AuthContext";
import { UserContext } from "../contexts/UserContext";
import { registerUser, signUpWithEmailAndPassword } from "../services/firebase";


const SignUpScreen = ({ navigation }) => {
// const {user, setUser} = useContext(UserContext);
const {authUser, updateAuthUser} = useContext(AuthContext);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const alertMessages = {
    'MISSING_PASSWORD': 'No password entered! \nPlease enter valid password',
    'WEAK_PASSWORD': 'Weak password entered! \nPassword should be at least 6 characters',
    'INVALID_EMAIL': 'Invalid email entered! \nPlease enter valid email',
    'EMPTY_INPUTS': 'Empty inputs received! \nAll input fields are required'
  }

  const handleSignUp = () => {
    console.log(">>>  Register");

    // if (fullName.trim().length < 1 || email.trim().length < 1 || password.trim().length < 1 || phoneNumber.trim().length < 1) {
    //   Alert.alert('Sign Up Error:', alertMessages['EMPTY_INPUTS'], [
    //     { text: 'Ok', onPress: () => console.log('Sign In error Ok pressed') },
    //   ]);
    //   return;
    // }

    signUpWithEmailAndPassword(email.toLowerCase().trim(), password).then(
      async (response) => {
        if (response.status === "success") {
          await registerUser({
            fullName,
            email: email.toLowerCase().trim(),
            phone: phoneNumber
          }).then(() => {
            console.log("Registered yahaaaaaa");
            updateAuthUser({ email, fullName, phoneNumber });
          });
          // setIsLoading(false);
        } else {
          Alert.alert('Sign Up Error:', alertMessages[response.message], [
            { text: 'Ok', onPress: () => console.log('Sign In error Ok pressed') },
          ]);
        }
      }
    );
  };

  return (
    <SafeAreaView
      className="flex-1 bg-[#F4E1D5] flex-col">
      <View className="flex-1 justify-center items-center" style={{ minHeight: hp(35) }}>
        <Image
          resizeMode="cover"
          source={require("../assets/logos/logo-orange.png")}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <ScrollView className="flex-2 ">
        <View className="flex-[2] bg-white rounded-t-3xl p-3 flex-col items-center" style={{ minHeight: hp(70) }}>
          <Text
            variant="headlineLarge"
            className="my-3 p-1 tracking-widest"
            style={{ fontFamily: "Lobster-Regular" }}
          >
            Sign Up
          </Text>
          <View className="flex-[2] w-full flex-col gap-4">
            <TextInput
              value={fullName}
              onChangeText={(text) => setFullName(text)}
              mode="outlined"
              label="Full Name"
              placeholder="John Doe"
              style={{ backgroundColor: "whitesmoke" }}
              underlineColor="#F4E1D5"
            />
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
            />
            <TextInput
              value={phoneNumber}
              onChangeText={(text) => setPhoneNumber(text)}
              mode="outlined"
              label="Phone Number"
              placeholder="0812345678"
              style={{ backgroundColor: "whitesmoke" }}
              keyboardType="numeric"
            />
            {/* <Text className="mt-4 self-center text-[#DD5A44]" variant="bodyLarge">
            Forgot your password?
          </Text> */}
          </View>
          <View className="flex-1 w-full  flex-col items-center justify-around">
            <Button
              style={{ marginTop: 55, width: "100%", fontWeight: 700 }}
              mode="contained"
              buttonColor="#DD5A44"
              uppercase={true}
              onPress={() => handleSignUp()}
              contentStyle={{
                marginHorizontal: 4,
                height: 50,
              }}
            >
              Sign Up
            </Button>
            <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
              <Text variant="bodyLarge" className="text-[#DD5A44]">
                Already have an account? Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});

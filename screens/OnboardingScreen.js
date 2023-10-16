import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useRef } from "react";
import Onboarding from "react-native-onboarding-swiper";
import Lottie from "lottie-react-native";
import LottieView from "lottie-react-native";
// import { useNavigation } from "@react-navigation/native";
// import { setItem } from "../utils/asyncStorage";

const { width, height } = Dimensions.get("window");

export default function OnboardingScreen() {
  // const navigation = useNavigation();
  const animation = useRef(null);

  const handleDone = () => {
    // navigation.navigate("Home");
    // setItem("onboarded", "1");
    console.log("Onboard Done!!!");
  };

  const doneButton = ({ ...props }) => {
    return (
      <TouchableOpacity style={styles.doneButton} {...props}>
        <Text>Done</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        // bottomBarHighlight={false}
        DoneButtonComponent={doneButton}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: "#a7f3d0",
            image: (
              <View style={styles.lottie}>
                <LottieView
                  autoPlay={true}
                  loop
                  ref={animation}
                  style={styles.lottie}
                  source={require("../assets/animations/animation_browse.json")}
                />
              </View>
            ),
            title: "Boost Productivity",
            subtitle: "Subscribe this channel to boost your productivity level",
          },
          {
            backgroundColor: "#fef3c7",
            image: (
              <View style={styles.lottie}>
                <LottieView
                  source={require("../assets/animations/animation_order_restaurant.json")}
                  autoPlay
                  loop
                  ref={animation}
                  style={styles.lottie}
                />
              </View>
            ),
            title: "Work Seamlessly",
            subtitle: "Get your work done seamlessly without interruption",
          },
          {
            backgroundColor: "#a78bfa",
            image: (
              <View style={styles.lottie}>
                <LottieView
                  source={require("../assets/animations/animation_location.json")}
                  autoPlay
                  loop
                  ref={animation}
                  style={styles.lottie}
                />
              </View>
            ),
            title: "Achieve Higher Goals",
            subtitle:
              "By boosting your productivity we help you to achieve higher goals",
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  lottie: {
    width: width * 0.9,
    height: width,
  },
  doneButton: {
    padding: 20,
    // backgroundColor: 'white',
    // borderTopLeftRadius: '100%',
    // borderBottomLeftRadius: '100%'
  },
});

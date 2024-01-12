import { StyleSheet, View, SafeAreaView } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Button, Text } from 'react-native-paper'
import AnimatedLottieView from 'lottie-react-native'
import { CartContext } from "../contexts/CartContext";

const OrderConfirmationScreen = ({ navigation }) => {
  const animation = useRef(null);
  const [countDown, setCountDown] = useState(5);
  console.log('navigation', navigation.getState());
  const { cart,clearCart } = useContext(CartContext);


  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {

      console.log('cart', cart)
      clearCart();
    })
    return unsubscribe;
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     startCountdown();
  //   }, 1000);

  //   return () => {
  //     clearInterval(interval);
  //   };

  //   function startCountdown() {
  //     setCountDown((prevCounter) => prevCounter - 1);
  //   }
  // }, []);

  return (
    <SafeAreaView className="pt-12 p-4 flex-1 justify-center items-center">
      <AnimatedLottieView
        source={require("../assets/animations/completed.json")}
        autoPlay
        loop
        ref={animation}
        style={{ width: "95%", height: "auto" }}
      />
      <Text variant="headlineSmall" className="mb-6 font-bold text-center w-[80%]">
        Order successfully confirmed!
      </Text>
      <Button
        style={{ marginVertical: 5, width: "60%", fontWeight: "bold" }}
        mode="contained"
        buttonColor="#DD5A44"
        uppercase={true}
        onPress={() => navigation.navigate("SignIn")}
        contentStyle={{ height: 50 }}
      >
        View My Orders
      </Button>
      <Text variant="bodyMedium" className="text-center w-[80%]">
        Or
      </Text>
      <Button
        style={{ marginVertical: 5, width: "60%", fontWeight: "bold", borderWidth: 1, borderColor: "#DD5A44" }}
        mode="contained"
        buttonColor="transparent"
        textColor="#333"
        uppercase={true}
        onPress={() => navigation.navigate("BottomNavigation", { index: 0 })}
        contentStyle={{ height: 50 }}
      >
        Go to Home
      </Button>
    </SafeAreaView>
  )
}

export default OrderConfirmationScreen

const styles = StyleSheet.create({})

// ToDo: sign in before placing order
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Button,
  Text,
  Divider,
  TextInput,
  SegmentedButtons,
  List,
  Avatar,
  Checkbox,
} from "react-native-paper";
import LottieView from "lottie-react-native";
import { AntDesign } from "@expo/vector-icons";
import CartItemCard from "../components/cards/CartItemCard";
import { CartContext } from "../contexts/CartContext";
import { menu } from "../database/dummyData";
import { Alert } from "react-native";

import { usePaymentSheet } from "@stripe/stripe-react-native";
import { saveCustomerOrder } from "../services/firebase";
import { SafeAreaView } from "react-native";

const CheckoutScreen = (props) => {
  // console.log("props", props);
  const animation = useRef(null);
  const { cart, setCart } = useContext(CartContext);

  const [cartTotal, setCartTotal] = useState(0)
  // console.log("cart screen====================--", cart);
  const [shipping, setShipping] = useState("delivery");
  const [ready, setReady] = useState(false);
  const { initPaymentSheet, presentPaymentSheet, loading } = usePaymentSheet();

  useEffect(() => {
    initialisePaymentSheet();
  }, [])

  // The following code creates the appearance shown in the screenshot above
  const customAppearance = {
    shapes: {
      borderRadius: 12,
      borderWidth: 0.5,
    },
    primaryButton: {
      shapes: {
        borderRadius: 50,
      },
    },
    colors: {
      primary: '#fcfdff',
      background: '#F4E1D5',
      componentBackground: '#f3f8fa',
      componentBorder: '#f3f8fa',
      componentDivider: '#000000',
      primaryText: '#000000',
      secondaryText: '#000000',
      componentText: '#000000',
      placeholderText: '#73757b',
    },
  };


  const initialisePaymentSheet = async () => {
    // const {paymentIntent, ephemeralKey, customer} = await fetchPaymentSheetParams();
    const { paymentIntent } = await fetchPaymentSheetParams();
    // console.log('paymentIntent', paymentIntent);
    const { error } = await initPaymentSheet({
      paymentIntentClientSecret: paymentIntent,
      // customerId: customer,
      // customerEphemeralKeySecret: ephemeralKey,
      merchantDisplayName: 'Nichoways',
      allowsDelayedPaymentMethods: true,
      // appearance: customAppearance,
    });

    if (error) {
      Alert.alert(`Error code:  ${error.code}`, error.message)
    } else {
      console.log('setting ready to true');
      setReady(true);
    }
  }

  const fetchPaymentSheetParams = async () => {
    const response = await fetch('https://restaurant-app-webservice.onrender.com/payments/intents', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: 5500,
      }),
    });
    const { paymentIntent } = await response.json();
    console.log('PaymentIntent in fetch', paymentIntent);
    return {
      paymentIntent
    };
  };

  useEffect(() => {
    const getCartTotal = () => {

      const runningTotal = cart.reduce((acc, obj) => {
        const total = obj.quantity * obj.price;
        return acc + total;
      }, 0);
      setCartTotal(runningTotal.toFixed(2));
    };
    getCartTotal();
  }, [cart])

  const buy = async () => {
    await saveCustomerOrder(createOrder())

    // console.log('first buy line', ready);
    // const { error } = await presentPaymentSheet();
    // console.log('await buy');
    // if (error) {
    //   Alert.alert(`Error code:  ${error.code}`, error.message);
    // } else {
    //   await saveCustomerOrder(createOrder())
    //   .then(

    //     Alert.alert("Success", "The payment was confirmed successfully")
    //   )
    // }
  }

  const createOrder = () => {
    const orderDateTime = new Date();
    const order = {
      customerName: "Nicholas Rabalao",
      email: "rabalao@gmail.com",
      phoneNumber:"0614556378",
      shipping: "Pick Up",
      items: cart,
      specialInstruction: "No icecubes on this order",
      totalBill: cartTotal,
      createTime: orderDateTime.toLocaleTimeString(),
      creationDate: orderDateTime.toLocaleDateString(),
    }
    return order;
  }

  return (
    <SafeAreaView className="pt-12 px-3 flex-col w-screen flex-1 relative items-center bg-white">
      <ScrollView
        className="flex-1 flex-col"
        showsVerticalScrollIndicator={false}
      // contentContainerStyle={{ flex: 1 }}
      >
        <View className="w-full justify-center flex-row p-3 mb-2">
          <Text
            className="p-1 tracking-widest"
            style={{ fontFamily: "Lobster-Regular", fontSize: 40 }}
          >
            Checkout
          </Text>
        </View>

        <View className="mb-3">
          <Text className=" text-gray-800" style={{ fontFamily: "GoodDogNew", fontSize: 24 }}>1. Profile</Text>
          <View className="ml-3">
            <Text className="text-base">Nicholas Rabalao</Text>
            <Text className="text-base">mrnicrab@gmail.com</Text>
            <Text className="text-base">0614534562</Text>
          </View>
        </View>
        <View className="mb-3">
          <Text className=" text-gray-800" style={{ fontFamily: "GoodDogNew", fontSize: 24 }}> 2. Shipping</Text>
          <SegmentedButtons
            className="mt-4"

            value={shipping}
            onValueChange={setShipping}
            theme={{ colors: { secondaryContainer: "#F4E1D5" } }}
            buttons={[
              {
                value: "delivery",
                label: "Delivery",
                showSelectedCheck: true
              },
              {
                value: "pickup",
                label: "Pick up",
                showSelectedCheck: true

              },
            ]}
          />

        </View>

        {cart && cart.length > 0 && (
          <View className="w-full p-1 flex-col h-full">
            <Text className=" text-gray-800" style={{ fontFamily: "GoodDogNew", fontSize: 24 }}>3. Order summary</Text>
            {
              cart.map((item, index) => {
                return (
                  <>
                    <View className="flex-row p-2">
                      <View className="h-full mr-4 rounded-sm flex-1 border border-gray-300">
                        <Image
                          source={{ uri: item?.image }}
                          className="h-full rounded-sm flex-1 "
                          resizeMode="cover"
                        />
                      </View>
                      <View className="flex-[3]">
                        <Text className="text-black">{item.name}</Text>
                        <Text>Quantity: {item.quantity}</Text>
                        <Text>R {item.price}</Text>
                      </View>
                    </View>
                    {index !== cart.length - 1 &&
                      <Divider className="my-1" />}
                  </>
                )
              })
            }

            <Text variant="bodyLarge" className="font-bold mt-4">
              Special instruction:
            </Text>
            <Text className="px-2 py-1 border text-sm border-gray-200">
              Customers can provide specific instructions for the delivery driver, such as gate codes, apartment numbers, or any other information that will help them locate the delivery address easily.
            </Text>

            <View className="rounded mt-10 p-3 bg-gray-200 w-full h-auto flex-col">
              <View className="flex-row justify-between">
                <Text variant="bodyMedium" className="font-semibold">
                  Subtotal:
                </Text>
                <Text variant="bodyMedium" className="font-semibold">
                  R{cartTotal}
                </Text>
              </View>
              <View className="flex-row justify-between my-2">
                <Text variant="bodyMedium" className="font-semibold">
                  Shipping:
                </Text>
                <Text variant="bodyMedium" className="font-semibold">
                  {"R0.00"}
                </Text>
              </View>
              <Divider />
              <View className="flex-row justify-between mt-1">
                <Text variant="bodyMedium" className="font-bold">
                  Total:
                </Text>
                <Text variant="bodyMedium" className="font-bold">
                  {cartTotal}
                </Text>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
      <Button
        style={{ position: 'absolute', bottom: 15, width: '100%' }}
        mode="contained"
        buttonColor="#DD5A44"
        uppercase={true}
        onPress={buy}
        contentStyle={{ height: 50, width: '100%' }}
      >
        Pay
      </Button>
    </SafeAreaView>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  cartItemShadow: {
    shadowColor: "#000",
    backgroundColor: "#fff",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 16.27,

    elevation: 10,
  },
});

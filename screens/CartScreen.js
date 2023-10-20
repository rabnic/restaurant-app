import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
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
import { Alert } from "react-native";

const CartScreen = (props) => {
  console.log("props", props);
  const animation = useRef(null);
  const { cart, setCart } = useContext(CartContext);
 
  const [cartTotal, setCartTotal] = useState(0)
  // console.log("cart screen====================--", cart);
  const [value, setValue] = useState("");

 
  
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


  return (
    <SafeAreaView className="pt-12 px-2 flex-1 relative bg-white">
      <ScrollView
        className="flex-1 flex-col"
        showsVerticalScrollIndicator={false}
      // contentContainerStyle={{ flex: 1 }}
      >
        <View className="w-full justify-center flex-row p-3 mb-2">
          <Text
            className="my-1 p-1 tracking-widest"
            style={{ fontFamily: "Lobster-Regular", fontSize: 40 }}
          >
            Cart
          </Text>
        </View>
        {cart && cart.length > 0 ? (
          <View className="w-full p-1 flex-col h-full">
            {cart.map((item, index) => {
              return (
                <CartItemCard
                  item={item}
                  index={index}
                  cart={cart}
                  setCart={setCart}
                  key={item.name}
                />
              );
            })}
            <Divider className="my-3" />
            {/* <View className="my-3">
              <Text variant="bodyLarge" className="font-bold text-gray-700">
                Add Sides:
              </Text>
              {menu["category11"].items.map((item) => {
                return (
                  <List.Item
                    title={item.name}
                    description={`R${item.price}`}
                    key={item.name}
                    left={(props) => (
                      <Avatar.Image source={{ uri: item.image }} size={40} />
                    )}
                    right={(props) => (
                      <Checkbox status={"checked"} onPress={() => { }} />
                    )}
                  />
                );
              })}
            </View> */}
            <Text variant="bodyLarge" className="font-bold">
              Special instruction:
            </Text>
            <TextInput
              multiline
              underlineColor="red"
              activeOutlineColor="#aaa"
              style={{
                paddingTop: 10,
                backgroundColor: "#fff",
                borderColor: "#ccc",
              }}
              mode="outlined"
              placeholder="Example: Extra mayo sauce..."
              numberOfLines={4}
              //   value={"Description"}
              onChangeText={(Description) => { }}
            />
            {/* <SegmentedButtons
            className="mt-4"
            value={value}
            onValueChange={setValue}
            buttons={[
              {
                value: "delivery",
                label: "Delivery",
              },
              {
                value: "pickup",
                label: "Pick up",
              },
            ]}
          /> */}
            <View className="rounded mt-4 p-3 bg-gray-200 w-full h-auto flex-col">
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
                  Discounted:
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
            <Button
              style={{ marginTop: 55, marginBottom: 20 }}
              mode="contained"
              buttonColor="#DD5A44"
              uppercase={true}
              onPress={() => props.navigation.navigate("Checkout")}
              contentStyle={{ marginHorizontal: 4, height: 50 }}
            >
              Checkout
            </Button>
          </View>
        ) : (
          <View className="w-full h-100 justify-center items-center flex-1 p-4 mt-8">
            <LottieView
              source={require("../assets/animations/animation_empty_cart.json")}
              autoPlay
              loop
              ref={animation}
              style={{ width: "95%", height: "auto" }}
            />
            <Text variant="headlineSmall" className="font-bold">
              Cart is empty
            </Text>
            <Button
              style={{ marginVertical: 20, width: "60%", fontWeight: "bold" }}
              mode="contained"
              buttonColor="#DD5A44"
              uppercase={true}
              onPress={() => props.jumpTo("home")}
              contentStyle={{ height: 50 }}
            >
              Go to Home
            </Button>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartScreen;

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

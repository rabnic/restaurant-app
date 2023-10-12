import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import React, { useContext, useState } from "react";
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
import { AntDesign } from "@expo/vector-icons";
import CartItemCard from "../components/cards/CartItemCard";
import { CartContext } from "../contexts/CartContext";
import { menu } from "../database/dummyData";

const CartScreen = () => {
  const { cart, setCart } = useContext(CartContext);
  console.log("cart screen====================--", cart);
  const [value, setValue] = useState("");

  return (
    <SafeAreaView className="pt-12  px-2 flex-1 relative bg-white">
      <ScrollView
        className="flex-1 "
        showsVerticalScrollIndicator={false}
        // contentContainerStyle={{ flex: 1 }}
      >
        <View className="w-full justify-center flex-row p-3 mb-2">
          <Text variant="headlineMedium" className="font-extrabold">
            Cart
          </Text>
        </View>
        <View className="w-full p-1 flex-col h-full">
          {cart.map((item) => {
            return <CartItemCard item={item} />;
          })}
          <Divider className="my-3" />
          <View className="my-3">
            <Text variant="bodyLarge" className="font-bold text-gray-700">
              Add Sides:
            </Text>
            {menu["category11"].items.map((item) => {
              return (
                <List.Item
                  title={item.name}
                  description={`R${item.price}`}
                  left={(props) => (
                    <Avatar.Image source={{ uri: item.image }} size={40} />
                  )}
                  right={(props) => (
                    <Checkbox status={"checked"} onPress={() => {}} />
                  )}
                />
              );
            })}
          </View>
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
            onChangeText={(Description) => {}}
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
                R115.00
              </Text>
            </View>
            <View className="flex-row justify-between my-2">
              <Text variant="bodyMedium" className="font-semibold">
                Delivery:
              </Text>
              <Text variant="bodyMedium" className="font-semibold">
                {value === "delivery" ? "R25.00" : "R0.00"}
              </Text>
            </View>
            <Divider />
            <View className="flex-row justify-between mt-1">
              <Text variant="bodyMedium" className="font-bold">
                Total:
              </Text>
              <Text variant="bodyMedium" className="font-bold">
                R140.00
              </Text>
            </View>
          </View>
          <Button
            style={{ marginTop: 55 }}
            mode="contained"
            buttonColor="#DD5A44"
            uppercase={true}
            onPress={() => console.log("Pressed")}
            contentStyle={{ marginHorizontal: 4, height: 50 }}
          >
            Checkout
          </Button>
        </View>
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

import {
  StyleSheet,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";
import { useFonts, Lobster_400Regular } from "@expo-google-fonts/lobster";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useContext, useEffect, useState } from "react";
import {
  Avatar,
  Badge,
  Button,
  Checkbox,
  Divider,
  IconButton,
  List,
  Text,
  TextInput,
} from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { styled } from "nativewind";
import { CartContext } from "../contexts/CartContext";
import CartHeaderIcon from "../components/CartHeaderIcon";
import { showMessage, hideMessage } from "react-native-flash-message";

const MenuItemDetailScreen = ({ route }) => {
  const { refreshment } = route.params;
  const [localCartItem, setLocalCartItem] = useState();
  const { cart, setCart } = useContext(CartContext);
  const [isLiked, setIsLiked] = useState(false);
  //   console.log("cart detail--", cart);

  useEffect(() => {
    const prepareLocalCartItem = () => {
      const { name, price, image } = refreshment;
      const matchedItem = cart.find((item) => item.name === name);
      if (matchedItem) {
        setLocalCartItem(matchedItem);
        return;
      }
      setLocalCartItem({
        name,
        image,
        price: Number(refreshment.price),
        quantity: 1,
      });
    };

    return prepareLocalCartItem();
  }, []);

  const increment = () => {
    setLocalCartItem((prev) => {
      return { ...prev, quantity: prev.quantity + 1 };
    });
  };
  const decrement = () => {
    if (localCartItem.quantity === 1) return;
    setLocalCartItem((prev) => {
      return { ...prev, quantity: prev.quantity - 1 };
    });
  };

  const getTotal = () => {
    return (localCartItem?.price * localCartItem?.quantity).toFixed(2);
  };

  const handleAddToCart = () => {
    console.log("current cart ==", cart);
    const matchedItemIndex = cart.findIndex(
      (item) => item.name === localCartItem.name
    );
    const updatedCart = [...cart];
    if (matchedItemIndex != -1) {
      console.log("local", localCartItem);
      updatedCart[matchedItemIndex] = localCartItem;
      setCart(updatedCart);
    } else {
      setCart([...updatedCart, localCartItem]);
    }
    showMessage({
      message: "Item added successfully to cart!",
      type: "success",
    });
  };

  return (
    <SafeAreaView className=" flex-1 w-screen flex-col relative">
      <StatusBar style="light" />

      <ImageBackground
        source={{ uri: refreshment.image }}
        className="flex-1 "
        resizeMode="cover"
      >
        <View
          className="w-full h-full absolute flex-col justify-end pl-3 pr-5 pb-5"
          style={{ backgroundColor: "rgba(0,0,0,.3)" }}
        >
          <View className="h-fit flex-row justify-between">
            {/* <Text variant="headlineLarge" className="text-white font-bold">
              {refreshment.name}
            </Text> */}
            <Text
            className="tracking-widest text-white"
            style={{ fontFamily: "Lobster-Regular", fontSize: 40 }}
          >
            {refreshment.name}
          </Text>
            <MaterialCommunityIcons
              name={isLiked ? "cards-heart" : "cards-heart-outline"}
              size={32}
              color={isLiked ? "tomato" : "white"}
              onPress={() => setIsLiked(!isLiked)}
            />
          </View>
          {/* <View className="flex-row justify-start gap-2">
                        <View>
                            <Text>30 mins</Text>
                        </View>
                        <View>
                            <Text>250 kcal</Text>
                        </View>
                        <View>
                            <Text>4.6</Text>
                        </View>
                    </View> */}
        </View>
        <Text></Text>
      </ImageBackground>
      <View className="flex-1 p-3">
        <Text variant="headlineMedium" className="mb-3 font-bold">
          Description
        </Text>
        <Text variant="headlineSmall" className="leading-8 mb-3">
          {refreshment.description}
        </Text>
        <Divider />
        <View className="rounded mt-auto mb-20 p-3 bg-gray-200 w-full h-auto flex-col ">
          <View className="flex-row justify-between my-1">
            <Text variant="bodyMedium" className="font-semibold">
              Unit Price:
            </Text>
            <Text variant="bodyMedium" className="font-semibold">
              R{localCartItem?.price}
            </Text>
          </View>
          <Divider />
          <View className="flex-row justify-between mt-1">
            <Text variant="bodyMedium" className="font-bold">
              Total:
            </Text>
            <Text variant="bodyMedium" className="font-bold">
              R{getTotal()}
            </Text>
          </View>
        </View>
      </View>
      <View className="flex-row px-3 justify-between items-center absolute bottom-4 w-full h-12">
        <View className="flex-row rounded-2xl justify-between border border-[#D1D1D1] items-center w-[40%] h-[100%]">
          <TouchableOpacity
            onPress={decrement}
            className="bg-[#D1D1D1] flex-1 h-full justify-center items-center rounded-l-xl"
          >
            <AntDesign name="minus" size={20} color="#DD5A44" />
          </TouchableOpacity>
          <Text
            variant="bodyLarge"
            className="bg-transparent font-bold flex-1 text-center justify-center items-center "
          >
            {localCartItem?.quantity}
          </Text>
          <TouchableOpacity
            onPress={increment}
            className="bg-[#D1D1D1] flex-1 h-full justify-center items-center rounded-r-xl"
          >
            <AntDesign
              name="plus"
              size={24}
              color="#DD5A44"
              className="h-full"
            />
          </TouchableOpacity>
        </View>

        <Button
          style={{ width: "50%", height: "100%" }}
          mode="contained"
          buttonColor="#DD5A44"
          uppercase={true}
          onPress={handleAddToCart}
          contentStyle={{ height: "100%", alignItems: "center" }}
        >
          Add to Cart
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default MenuItemDetailScreen;

const styles = StyleSheet.create({});

import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Text } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { styled } from "nativewind";

const StyledView = styled(View);

function CartItemCard({ item, index, cart, setCart }) {

  const increment = () => {
    const updatedCart = [...cart];
    updatedCart[index].quantity++;
    setCart(updatedCart);
  };
  const decrement = () => {
    const updatedCart = [...cart];
    if(updatedCart[index].quantity == 1) {
      updatedCart.splice(index, 1);
      setCart(updatedCart);
      return
    }
    updatedCart[index].quantity--;
    setCart(updatedCart);
  };
  
  return (
    <StyledView
      className="w-full h-32 flex-row rounded-lg p-3 gap-1 mb-3 mx-auto"
      style={styles.cartItemShadow}
    >
      <View className="flex-1 rounded-lg">
        <TouchableOpacity>
          <Image
            source={{ uri: item?.image }}
            className="h-full w-full rounded-lg"
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
      <View className="flex-[2] p-2  flex-col justify-around relative">
        {/* <MaterialCommunityIcons name="trash-can" size={24} color="#D8423E" style={{ position: "absolute", top: 0, right: 5 }} /> */}
        <View className="flex-1 flex-col justify-around mb-2">
          <Text variant="bodyLarge" className="font-bold mb-2">
            {item?.name}
          </Text>
          {/* <Text variant="bodyMedium">Something nice</Text> */}
        </View>
        <View className="flex-1 flex-row justify-between items-center">
          <Text variant="labelLarge" className=" font-bold">
            {`R${item?.price}`}
          </Text>
          <View
            className="flex-row rounded-2xl justify-between items-center w-28  py-2"
            style={{ backgroundColor: "#D1D1D1" }}
          >
            <View className="flex-1 justify-between items-center">
              <TouchableOpacity onPress={decrement}>
                <AntDesign
                  name={item?.quantity > 1 ? "minus" : "delete"}
                  size={20}
                  color="#DD5A44"
                />
              </TouchableOpacity>
            </View>
            <View className="flex-1 justify-between items-center ">
              <Text variant="bodyLarge" className="font-bold ">
                {item?.quantity}
              </Text>
            </View>
            <View className="flex-1 justify-between items-center ">
              <TouchableOpacity onPress={increment}>
                <AntDesign name="plus" size={24} color="#DD5A44" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </StyledView>
  );
}

export default CartItemCard;

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

    elevation: 7,
  },
});

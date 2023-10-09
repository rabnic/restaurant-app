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
const StyledText = styled(Text);

function CartItemCard() {
  return (
    <StyledView
      className="w-full h-32 flex-row rounded-lg p-3 gap-1 mb-3 mx-auto"
      style={styles.cartItemShadow}
    >
      <View className="flex-1 rounded-lg">
        <TouchableOpacity>
          <Image
            source={require("../../assets/menu-images/burgers/triple-trouble.jpg")}
            className="h-full w-full rounded-lg"
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
      <View className="flex-[2] p-2  flex-col justify-around relative">
        {/* <MaterialCommunityIcons name="trash-can" size={24} color="#D8423E" style={{ position: "absolute", top: 0, right: 5 }} /> */}
        <View className="flex-1 flex-col justify-around">
          <Text variant="bodyLarge" className="font-bold mb-2">
            Mexicano Burger
          </Text>
          <Text variant="bodyMedium">Something nice</Text>
        </View>
        <View className="flex-1 flex-row justify-between items-center">
          <Text variant="labelLarge" className=" font-bold">
            {" "}
            R55.00
          </Text>
          <View
            className="flex-row rounded-2xl p-2 justify-between items-center w-28"
            style={{ backgroundColor: "#D1D1D1" }}
          >
            <TouchableOpacity>
              <AntDesign name="delete" size={20} color="#DD5A44" />
            </TouchableOpacity>
            <Text variant="bodyLarge" className="font-bold">
              1
            </Text>
            <TouchableOpacity>
              <AntDesign name="plus" size={24} color="#DD5A44" />
            </TouchableOpacity>
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

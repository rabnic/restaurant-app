import React from "react";
import { StyleSheet, View } from "react-native";
import { Card, Text } from "react-native-paper";

const PromotionCard = ({ image, title, discount, extraInfo }) => {
  return (
    <Card className="w-[95%] bg-slate-600 self-center relative mx-auto">
      <Card.Cover source={{ uri: image }} />
      <View
        className="w-full h-[100%] absolute flex-col items-center rounded-xl p-2"
        style={{ backgroundColor: "rgba(0,0,0,.3)" }}
      >
        <Text
          variant="headlineMedium"
          className="text-white font-bold "
          style={{ fontFamily: "Lobster-Regular" }}
        >
          {title}
        </Text>
        <Text variant="bodyLarge" className="text-gray-200 font-bold ">
          {discount}% off
        </Text>
        <Text variant="bodyMedium" className="text-gray-300 font-bold mt-auto">
          *{extraInfo}
        </Text>
      </View>
    </Card>
  );
};

export default PromotionCard;

const styles = StyleSheet.create({});

import { StyleSheet, View, Image, SafeAreaView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Avatar,
  Searchbar,
  Card,
  Text,
  BottomNavigation,
} from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Carousel from "react-native-snap-carousel-v4";
import PromotionCard from "../components/cards/PromotionCard";

const HomeScreen = () => {
  const mainPromos = [
    {
      image: "../../assets/menu-images/burgers/triple-trouble.jpg",
      title: "Friends of 3s",
      discount: "30",
      extraInfo: "suitable for 3 people",
    },
    {
      image: "../../assets/menu-images/burgers/couple-meal.jpg",
      title: "",
      discount: "25",
      extraInfo: "free drink if you are married",
    },
    {
      image: "../../assets/menu-images/burgers/lunch-spree.jpg",
      title: "",
      discount: "20",
      extraInfo: "sold between 11:00 and 13:00",
    },
  ];

  return (
    <SafeAreaView className="flex-1 p-4 pt-12 flex-col gap-2">
      <StatusBar style="auto" />
      <View className="py-2 flex-row items-center">
        <Avatar.Image
          source={require("../assets/user-profile.jpg")}
          size={40}
        />
        <View className="ml-3">
          <Text>Good afternoon</Text>
          <Text className="font-bold">Nicholas</Text>
        </View>
      </View>
      <View className="mt-2">
        <Searchbar
          placeholder="Search food"
          onChangeText={() => {}}
          value={""}
          className="bg-transparent border border-gray-300"
        />
      </View>
      <Text variant="headlineSmall" className="-mb-2">
        Promotions
      </Text>
      <View className=" flex-row w-full -justify-center">
        <Card className="w-[95%] bg-slate-600 self-center relative mx-auto">
          <Card.Cover
            source={require("../assets/menu-images/burgers/triple-trouble.jpg")}
          />
          <View
            className="w-full h-[100%] absolute flex-col items-center rounded-xl p-2"
            style={{ backgroundColor: "rgba(0,0,0,.3)" }}
          >
            <Text variant="headlineMedium" className="text-white font-bold ">
              Friends of 3s
            </Text>
            <Text variant="bodyLarge" className="text-gray-200 font-bold ">
              30% off
            </Text>
            <Text
              variant="bodyMedium"
              className="text-gray-300 font-bold mt-auto"
            >
              *suitable for 3 people
            </Text>
          </View>
        </Card>
      </View>
      <Text variant="headlineSmall" className="-mb-2">
        Categories
      </Text>
      <View className="flex-row w-[100%] justify-around">
        <View className="flex-col items-center ">
          <Avatar.Image
            source={require("../assets/menu-images/cold-drinks/assorted.jpg")}
            size={45}
            className="shadow-lg"
          />
          <Text variant="bodyMedium" className="font-extrabold">
            Drinks
          </Text>
        </View>
        <View className="flex-col items-center">
          <Avatar.Image
            source={require("../assets/menu-images/burgers/mexicano.jpg")}
            size={45}
          />
          <Text variant="bodyMedium">Burgers</Text>
        </View>
        <View className="flex-col items-center">
          <Avatar.Image
            source={require("../assets/menu-images/pizzas/avo-olives.jpg")}
            size={45}
          />
          <Text variant="bodyMedium">Pizzas</Text>
        </View>
        <View className="flex-col items-center">
          <Avatar.Image
            source={require("../assets/menu-images/noodles/noodle-2.jpg")}
            size={45}
          />
          <Text variant="bodyMedium">Pasta</Text>
        </View>
        <View className="flex-col items-center">
          <Avatar.Image
            source={require("../assets/menu-images/platters/assorted-platter.jpeg")}
            size={45}
          />
          <Text variant="bodyMedium">Platters</Text>
        </View>
        <View className="flex-col items-center">
          <Avatar.Image
            source={require("../assets/menu-images/rice/rice-3.jpg")}
            size={45}
          />
          <Text variant="bodyMedium">Rice</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

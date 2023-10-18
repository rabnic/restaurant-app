import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import React, { useState, useRef, useContext, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Avatar,
  Text,
} from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { menu } from "../database/dummyData";
import CategoryList from "../components/CategoryList";
import RefreshmentCard from "../components/cards/RefreshmentCard";
import { CartContext } from "../contexts/CartContext";
import { UserContext } from "../contexts/UserContext";
import PromotionsCarousel from "../components/PromotionsCarousel";
import { getTimeOfDay } from "../utils/misc";
const HomeScreen = ({ route, navigation }) => {
  const { cart } = useContext(CartContext);
  const { user } = useContext(UserContext);
  // console.log("route home--", route);

  const [activeCategoryId, setActiveCategoryId] = useState();

  useEffect(() => {
    // if (route.params?.hasOwnProperty("fromScreen")) {
    //   console.log("====", route.params.fromScreen);
    // }
  }, []);

  return (
    <SafeAreaView className="flex-1 pt-12 px-3 flex-col">
      <StatusBar style="auto" />
      <View className="py-2 flex-row items-center">
      {
          user ?
            (
              <Avatar.Image
                source={require("../assets/user-profile.jpg")}
                size={40}
              />
            )
            :
            (
              <Avatar.Text size={50} label={user ? 'ND' : 'DC'} />
            )
        }
        <View className="ml-3">
          <Text>Good {getTimeOfDay()}</Text>
          <Text className="font-bold">{user === null ? 'Dearest Customer': user.fullName}</Text>
        </View>
      </View>

      <ScrollView
        className="w-full flex-col"
        showsVerticalScrollIndicator={false}
      >
        <View className="mb-4 flex-row justify-center">
          <Image
            source={require("../assets/logos/logo-orange.png")}
            resizeMode="cover"
            style={{
              width: "100%",
              height: 90,
            }}
          />
          {/* <Searchbar
            placeholder="Search food"
            onChangeText={() => {}}
            value={""}
            className="bg-transparent border border-gray-300"
          /> */}
        </View>

        <View className="mb-4 w-full">
          <PromotionsCarousel />
        </View>

        <View className="mb-4 flex-row w-[100%] justify-between h-auto">
          <CategoryList setActiveCategoryId={setActiveCategoryId} />
        </View>

        <View className="flex-1 w-full flex-row flex-wrap">
          {activeCategoryId &&
            menu[activeCategoryId].items.map((item, index) => (
              <RefreshmentCard
                refreshment={item}
                navigation={navigation}
                menuItemId={index}
                key={item.name}
              />
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

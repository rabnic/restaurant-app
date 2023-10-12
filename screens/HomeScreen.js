import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useRef, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Avatar,
  Searchbar,
  Card,
  Text,
  BottomNavigation,
  Button,
} from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Carousel from "react-native-snap-carousel";
import PromotionCard from "../components/cards/PromotionCard";
import { mainPromos, menu } from "../database/dummyData";
import CategoryList from "../components/CategoryList";
import RefreshmentCard from "../components/cards/RefreshmentCard";
import { CartContext } from "../contexts/CartContext";
const HomeScreen = ({ route, navigation }) => {
  const { cart } = useContext(CartContext);
  // console.log("cart home--", cart);
  const [activeIndex, setActiveIndex] = useState(1);
  const [activeCategoryId, setActiveCategoryId] = useState();

  const carouselRef = useRef(null);

  const renderItem = ({ item, index }) => (
    <Card className="w-[100%] bg-slate-600 self-center relative">
      <Card.Cover source={{ uri: item.image }} />
      <View
        className="w-[100%] h-[100%] absolute flex-col items-center rounded-xl p-2"
        style={{ backgroundColor: "rgba(0,0,0,.3)" }}
      >
        <Text
          variant="headlineMedium"
          className="text-white font-bold "
          style={{ fontFamily: "Lobster-Regular" }}
        >
          {item.title}
        </Text>
        <Text variant="bodyLarge" className="text-gray-200 font-bold ">
          {item.discount}% off
        </Text>
        <Text variant="bodyMedium" className="text-gray-300 font-bold mt-auto">
          *{item.extraInfo}
        </Text>
      </View>
    </Card>
  );

  const onSnapToItem = (index) => {
    setActiveIndex(index);
  };

  return (
    <SafeAreaView className="flex-1 pt-12 px-3 flex-col">
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

      <ScrollView className="w-full flex-col">
        <View className="mb-4">
          <Searchbar
            placeholder="Search food"
            onChangeText={() => {}}
            value={""}
            className="bg-transparent border border-gray-300"
          />
        </View>

        <View className="mb-4 flex-row w-[100%] max-w-[100%] justify-center items-center">
          <Carousel
            layout={"default"}
            ref={carouselRef}
            data={mainPromos}
            sliderWidth={wp(75)}
            itemWidth={wp(85)}
            renderItem={renderItem}
            onSnapToItem={onSnapToItem}
          />
        </View>

        <View className="mb-4 flex-row w-[100%] justify-between h-auto">
          <CategoryList setActiveCategoryId={setActiveCategoryId} />
        </View>

        <View className="flex-1 w-full">
          {activeCategoryId && (
            <FlatList
              numColumns={2}
              showsVerticalScrollIndicator={false}
              data={menu[activeCategoryId].items}
              renderItem={({ item, index }) => (
                <RefreshmentCard
                  refreshment={item}
                  navigation={navigation}
                  menuItemId={index}
                />
              )}
              keyExtractor={(item) => item.name}
            />
          )}

          {/* <Card className="w-[50%] bg-white" style={{ height: hp(20) }}>
          <Card.Cover
            source={{uri: menu[activeCategoryId].items[0].image}}
            className="h-[65%] border-b border-x border-gray-100"
          />
          <Card.Content className="mt-2">
            <Text variant="bodyLarge">{menu[activeCategoryId].items[0].name}</Text>
            <Text variant="bodyMedium" className="font-bold ml-auto">
              R{menu[activeCategoryId].items[0].price}
            </Text>
          </Card.Content>
        </Card>  */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

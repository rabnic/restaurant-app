import { StyleSheet, View, Image, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import React, { useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
    Avatar,
    Searchbar,
    Card,
    Text,
    BottomNavigation,
    Button
} from "react-native-paper";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Carousel from "react-native-snap-carousel-v4";
import PromotionCard from "../components/cards/PromotionCard";
import CategoryCard from "../components/cards/CategoryCard";
import { menu, mainPromos } from "../database/dummyData";

const HomeScreen = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [activeIndex, setActiveIndex] = useState(1);

    const carouselRef = useRef(null);

    const renderItem = ({ item, index }) => (
        <Card className="w-[100%] bg-slate-600 self-center relative">
            <Card.Cover
                source={require("../assets/menu-images/burgers/triple-trouble.jpg")}
            />
            <View
                className="w-[100%] h-[100%] absolute flex-col items-center rounded-xl p-2"
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
    );

    const onSnapToItem = (index) => {
        setActiveIndex(index);
    };


    const categoryData = () => {
        return Object.keys(menu).map(key => {
            return {
                categoryId: key,
                category: menu[key].category,
                image: menu[key].image
            }
        })
    }

    return (
        <SafeAreaView className="flex-1 pt-12 px-4 flex-col">
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
            <View className="mb-4">
                <Searchbar
                    placeholder="Search food"
                    onChangeText={() => { }}
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
                {/* <Card className="w-[100%] bg-slate-600 self-center relative">
                    <Card.Cover
                        source={require("../assets/menu-images/burgers/triple-trouble.jpg")}
                    />
                    <View
                        className="w-[100%] h-[100%] absolute flex-col items-center rounded-xl p-2"
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
                </Card> */}
            </View>

            <View className="mb-4 flex-row w-[100%] justify-between h-auto">
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={categoryData()}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => setSelectedCategory(item.category)}>
                            <CategoryCard selectedCategory={selectedCategory} image={item.image} category={item.category} />
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.categoryId}
                />
            </View>
            <View className="flex-row flex-1 gap-2 flex-wrap">
                <Card className="w-[50%] bg-white" style={{ height: hp(20) }}>
                    <Card.Cover source={require('../assets/menu-images/cold-drinks/coke.jpg')} className="h-[60%]" />
                    <Card.Content className="mt-2">
                        <Text variant="bodyLarge">Coca-cola 1 x 300ml Bottle</Text>
                        <Text variant="bodyMedium" className="font-bold ml-auto">R9.50</Text>
                    </Card.Content>
                </Card>
                <Card className="w-[45%] bg-white" style={{ height: hp(20) }}>
                    <Card.Cover source={require('../assets/menu-images/cold-drinks/beetie-huice.jpg')} className="h-[60%]" />
                    <Card.Content className="mt-2">
                        <Text variant="bodyLarge">Coca-cola 1 x 300ml Bottle</Text>
                        <Text variant="bodyMedium" className="font-bold ml-auto">R9.50</Text>
                    </Card.Content>
                </Card>
                <Card className="w-[45%] bg-white" style={{ height: hp(20) }}>
                    <Card.Cover source={require('../assets/menu-images/cold-drinks/sping-water.jpg')} className="h-[60%]" />
                    <Card.Content className="mt-2">
                        <Text variant="bodyLarge">Coca-cola 1 x 300ml Bottle</Text>
                        <Text variant="bodyMedium" className="font-bold ml-auto">R9.50</Text>
                    </Card.Content>
                </Card>
                <Card className="w-[50%] bg-white" style={{ height: hp(20) }}>
                    <Card.Cover source={require('../assets/menu-images/cold-drinks/greenie-juice.jpg')} className="h-[60%]" />
                    <Card.Content className="mt-2">
                        <Text variant="bodyLarge">Coca-cola 1 x 300ml Bottle</Text>
                        <Text variant="bodyMedium" className="font-bold ml-auto">R9.50</Text>
                    </Card.Content>
                </Card>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({});

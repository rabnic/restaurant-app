import { StyleSheet, View, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";
import { useFonts, Lobster_400Regular } from "@expo-google-fonts/lobster";

import React from 'react'
import { Avatar, Button, Checkbox, Divider, List, Text, TextInput, } from 'react-native-paper'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { styled } from 'nativewind';

const MenuItemDetailScreen = ({ route }) => {
    const { refreshment } = route.params;

    const [fontsLoaded, fontError] = useFonts({
        Lobster_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }

    const StyledView = styled(View);
    return (
        <SafeAreaView className=" flex-1 w-screen flex-col relative">
            <StatusBar style="light" />

            <ImageBackground source={{ uri: refreshment.image }} className="flex-1" resizeMode="cover">
                <View
                    className="w-[100%] h-[100%] absolute flex-col justify-end rounded-xl pl-3 pb-5" style={{ backgroundColor: "rgba(0,0,0,.3)" }}>
                    <Text variant="headlineLarge" className="text-white font-bold" style={{ fontFamily: "Lobster_400Regular" }}>
                        {refreshment.name}
                    </Text>
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
                <Text variant="headlineMedium" className="mb-3 font-bold">Description</Text>
                <Text variant="headlineSmall" className="leading-8 mb-3">
                    {refreshment.description}
                </Text>
                <Divider />
                {/* <View className="mt-3">
                    <Text variant='bodyLarge' className="font-bold text-gray-700" >Add Sides:</Text>
                    <List.Item
                        title="Fries small"
                        description="R23.50"
                        left={props => <Avatar.Image source={require("../assets/menu-images/sides/fries.jpg")} size={40} />}
                        right={props =><Checkbox status={'checked'} onPress={() => { }} />}
                    />
                    <List.Item
                        title="Fries small"
                        description="R23.50"
                        left={props => <Avatar.Image source={require("../assets/menu-images/sides/fries.jpg")} size={40} />}
                        right={props =><Checkbox status={'unchecked'} onPress={() => { }} />}
                    />
                    <List.Item
                        title="Fries small"
                        description="R23.50"
                        left={props => <Avatar.Image source={require("../assets/menu-images/sides/fries.jpg")} size={40} />}
                        right={props =><Checkbox status={'checked'} onPress={() => { }} />}
                    />
                </View> */}
                <View className="rounded mt-auto mb-20 p-3 bg-gray-200 w-full h-auto flex-col ">
                    <View className="flex-row justify-between mt-1">
                        <Text variant="bodyMedium" className="font-bold">
                            Total:
                        </Text>
                        <Text variant="bodyMedium" className="font-bold">
                            R{refreshment.price}
                        </Text>
                    </View>
                </View>
            </View>
            <View className="flex-row px-3 justify-between items-center absolute bottom-4 w-full h-12">
                <View className="flex-row rounded-2xl justify-between border border-[#D1D1D1] items-center w-[40%] h-[100%]" >

                    <TouchableOpacity className="bg-[#D1D1D1] flex-1 h-full justify-center items-center rounded-l-xl">
                        <AntDesign name="minus" size={20} color="#DD5A44" />
                    </TouchableOpacity>
                    <Text variant="bodyLarge" className="bg-transparent font-bold flex-1 text-center justify-center items-center ">
                        1
                    </Text>
                    <TouchableOpacity className="bg-[#D1D1D1] flex-1 h-full justify-center items-center rounded-r-xl">
                        <AntDesign name="plus" size={24} color="#DD5A44" className="h-full" />
                    </TouchableOpacity>
                </View>


                <Button
                    style={{ width: "50%", height: "100%" }}
                    mode="contained"
                    buttonColor="#DD5A44"
                    uppercase={true}
                    onPress={() => console.log("Pressed")}
                    contentStyle={{ height: "100%", alignItems: "center" }}
                >
                    Add to Cart
                </Button>
            </View>
        </SafeAreaView>
    )
}

export default MenuItemDetailScreen

const styles = StyleSheet.create({})
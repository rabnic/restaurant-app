import { StyleSheet, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { Button, Text, } from 'react-native-paper'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { styled } from 'nativewind';

const CartScreen = () => {
    const StyledView = styled(View);
    return (
        <SafeAreaView className="pt-12 px-4 flex-1 w-screen">
            <View className="w-full justify-center flex-row p-3 mb-2">
                <Text variant='headlineMedium' className="font-extrabold">Cart</Text>
            </View>
            <StyledView className="flex-1 w-full p-1 flex-col gap-2">
                <StyledView className="w-full h-32 flex-row rounded-lg shadow border p-2 gap-1 mx-auto">
                    <View className="flex-1 rounded-lg">
                        <Image source={require("../assets/menu-images/burgers/triple-trouble.jpg")} className="h-full w-full rounded-lg" resizeMode='cover' />

                    </View>
                    <View className="flex-[2] p-2  flex-col justify-around relative">
                        {/* <MaterialCommunityIcons name="trash-can" size={24} color="#D8423E" style={{ position: "absolute", top: 0, right: 5 }} /> */}
                        <View className="flex-1 flex-col justify-around">
                            <Text variant='bodyLarge' className="font-bold mb-2">Mexicano Burger Burge Burge</Text>
                            <Text variant='bodyMedium'>Something nice</Text>
                        </View>
                        <View className="flex-1 flex-row justify-between items-center">
                            <Text variant='labelLarge' className=" font-bold"> R55.00</Text>
                            <View className="flex-row rounded-2xl p-2 justify-between items-center w-28" style={{ backgroundColor: "#D1D1D1" }}>
                                <AntDesign name="minus" size={24} color="#DD5A44" />
                                <Text variant="bodyLarge" className="font-bold">1</Text>
                                <AntDesign name="plus" size={24} color="#DD5A44" />
                            </View>
                        </View>
                    </View>
                </StyledView>
            </StyledView>
        </SafeAreaView>
    )
}

export default CartScreen

const styles = StyleSheet.create({})
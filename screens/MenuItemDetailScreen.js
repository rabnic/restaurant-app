import { StyleSheet, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { Button, Text,} from 'react-native-paper'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { styled } from 'nativewind';

const MenuItemDetailScreen = () => {
    const StyledView = styled(View);
  return (
    <SafeAreaView className="pt-12 px-4 flex-1 w-screen">
      <View className="w-full justify-center flex-row p-3 mb-2">
        <Text variant='headlineMedium' className="font-extrabold">Cart</Text>
      </View>
      <StyledView className="flex-1 w-full p-1 flex-col gap-2">
        <StyledView className="w-full h-28 flex-row rounded-lg shadow border p-1 gap-1 mx-auto">
            <View className="flex-1 rounded-lg">
                <Image source={require("../assets/menu-images/burgers/triple-trouble.jpg")} className="h-full w-full rounded-lg" resizeMode='cover'/>

            </View>
            <View className="flex-[2] p-2">
                <Text variant='bodyLarge' className="font-bold mb-2">Mexicano Burger</Text>
                <Text variant='bodyMedium'>Something nice</Text>
            </View>
            <View className="flex-1 flex-col justify-around">
                    <Text variant='labelLarge'> R55.00</Text>
                    <Button  mode='elevated'>-   1  +</Button>
            </View>
        </StyledView>
        <StyledView className="w-full h-28 flex-row rounded-lg shadow border p-1 gap-1 mx-auto">
            <View className="flex-1 rounded-lg">
                <Image source={require("../assets/menu-images/burgers/triple-trouble.jpg")} className="h-full w-full rounded-lg" resizeMode='cover'/>

            </View>
            <View className="flex-[2] p-2">
                <Text variant='bodyLarge' className="font-bold mb-2">Mexicano Burger</Text>
                <Text variant='bodyMedium'>Something nice</Text>
            </View>
            <View className="flex-1 flex-col justify-around">
                    <Text variant='labelLarge'> R55.00</Text>
                    <Button  mode='elevated'>-   1  +</Button>
            </View>
        </StyledView>
        <StyledView className="w-full h-28 flex-row rounded-lg shadow border p-1 gap-1 mx-auto">
            <View className="flex-1 rounded-lg">
                <Image source={require("../assets/menu-images/burgers/triple-trouble.jpg")} className="h-full w-full rounded-lg" resizeMode='cover'/>

            </View>
            <View className="flex-[2] p-2">
                <Text variant='bodyLarge' className="font-bold mb-2">Mexicano Burger</Text>
                <Text variant='bodyMedium'>Something nice</Text>
            </View>
            <View className="flex-1 flex-col justify-around">
                    <Text variant='labelLarge'> R55.00</Text>
                    <Button  mode='elevated'>-   1  +</Button>
            </View>
        </StyledView>
      </StyledView>
    </SafeAreaView>
  )
}

export default MenuItemDetailScreen

const styles = StyleSheet.create({})
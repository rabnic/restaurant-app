import { StyleSheet, View, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Avatar, Searchbar, Card, Text, BottomNavigation } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const HomeScreen = () => {

    const mainPromos = [
        {
            uri: "'../assets/user-profile.jpg'",
            title: "",
            discount: "",
            extraInfo: "",
        },
        {
            uri: "'../assets/user-profile.jpg'",
            title: "",
            discount: "",
            extraInfo: "",
        },
        {
            uri: "'../assets/user-profile.jpg'",
            title: "",
            discount: "",
            extraInfo: "",
        }
    ]

    return (
        <SafeAreaView className="flex-1 p-4 pt-12 flex-col gap-2">
            <StatusBar style="auto" />
            <View className="py-2 flex-row items-center" >
                <Avatar.Image source={require('../assets/user-profile.jpg')} size={40} />
                <View className="ml-3">
                    <Text>Good afternoon</Text>
                    <Text className="font-bold">Nicholas</Text>
                </View>
            </View>
            <View className="mt-2">
                <Searchbar
                    placeholder="Search food"
                    onChangeText={() => { }}
                    value={""}
                    className="bg-transparent border border-gray-300"
                />
            </View>
            <Text variant="headlineLarge" className="-mb-2">Promotions</Text>
            <View className="flex-row">
                <Card className="w-[95%] bg-slate-600 self-center relative mx-auto">
                    <Card.Cover source={require('../assets/menu-images/burgers/triple-trouble.jpg')} />
                    <View className="w-full h-[100%] absolute flex-col items-center rounded-xl p-2" style={{ backgroundColor: 'rgba(0,0,0,.3)' }}>
                        <Text variant="headlineMedium" className="text-white font-bold ">Friends of 3s</Text>
                        <Text variant="bodyLarge" className="text-gray-200 font-bold ">30% off</Text>
                        <Text variant="bodyMedium" className="text-gray-300 font-bold mt-auto">*suitable for 3 people</Text>
                    </View>
                </Card>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({

})
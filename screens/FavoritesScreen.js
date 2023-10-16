import { View, ScrollView } from 'react-native'
import React, { useContext, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Text } from 'react-native-paper'
import AnimatedLottieView from 'lottie-react-native'
import { UserContext } from '../contexts/UserContext'

const FavoritesScreen = ({ navigation }) => {
    const { user } = useContext(UserContext)
    const animation = useRef(null);

    return (
        <SafeAreaView className="pt-12 px-2 flex-1 relative bg-white">
            <ScrollView
                className="flex-1 flex-col"
                showsVerticalScrollIndicator={false}
            // contentContainerStyle={{ flex: 1 }}
            >
                <View className="w-full justify-center flex-row p-3 mb-2">
                    <Text
                        className="my-1 p-1 tracking-widest"
                        style={{ fontFamily: "Lobster-Regular", fontSize: 40 }}
                    >
                        Favorites
                    </Text>
                </View>

                <View className="w-full h-100 justify-center items-center flex-1 p-4 mt-8">
                    {
                        user ?
                            (
                                <>
                                    <AnimatedLottieView
                                        source={require("../assets/animations/animation_empty_box.json")}
                                        autoPlay
                                        loop
                                        ref={animation}
                                        style={{ width: "95%", height: "auto" }}
                                    />
                                    <Text variant="headlineSmall" className="font-bold text-center w-[80%]">
                                        It's empty here. Add favorites from Home Screen
                                    </Text>
                                    <Button
                                        style={{ marginVertical: 20, width: "60%", fontWeight: "bold" }}
                                        mode="contained"
                                        buttonColor="#DD5A44"
                                        uppercase={true}
                                        onPress={() => navigation.navigate("SignIn")}
                                        contentStyle={{ height: 50 }}
                                    >
                                        Go to Home
                                    </Button>
                                </>
                            )
                            :
                            (
                                <>
                                    <Text variant="headlineSmall" className="font-bold text-center w-[80%] mt-12">
                                        Sign in to save favorites
                                    </Text>
                                    <Button
                                        style={{ marginVertical: 20, width: "60%", fontWeight: "bold" }}
                                        mode="contained"
                                        buttonColor="#DD5A44"
                                        uppercase={true}
                                        onPress={() => navigation.navigate("SignIn")}
                                        contentStyle={{ height: 50 }}
                                    >
                                        Go to Sign In
                                    </Button>
                                </>
                            )
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default FavoritesScreen
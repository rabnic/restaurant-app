import { StyleSheet, SafeAreaView, Image, View } from 'react-native'
import React from 'react'

const SplashScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#F4E1D5] flex-col">
      <View className="flex-1 justify-center items-center">
        <Image resizeMode='cover' source={require('../assets/logos/logo-orange.png')} style={{ width: '100%', height: '50%', borderColor: 'black', borderLeftWidth: 1 }} />
      </View>
    </SafeAreaView>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})
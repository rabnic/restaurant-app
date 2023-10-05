import { StyleSheet, View, SafeAreaView } from 'react-native'
import React from 'react'
import { Text } from 'react-native-paper'

const OrderConfirmationScreen = () => {
  return (
    <SafeAreaView className="pt-12 p-4">
      <View>
        <Text variant='headlineMedium'>Cart</Text>
      </View>
    </SafeAreaView>
  )
}

export default OrderConfirmationScreen

const styles = StyleSheet.create({})
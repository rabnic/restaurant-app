import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Text
} from "react-native";
import React from "react";


const CheckoutScreen = () => {

  return (
    <SafeAreaView >
      <ScrollView
       
      >
        <View >
          <Text
            className="my-1 p-1 tracking-widest"
            style={{ fontFamily: "Lobster-Regular", fontSize: 40 }}
          >
            Checkout
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({});

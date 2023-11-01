import React from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native";
import { Card, Text } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const RefreshmentCard = ({ refreshment, navigation, menuItemId }) => {
  // console.log('----', menuItemId);
  return (
    <Card className="bg-white mx-auto mb-3 " style={{ height: wp(35),maxHeight: wp(38), width: wp(44) }}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("MenuItemDetail", { refreshment, refreshment })
        }
        className="h-[65%]"
      >
        <Card.Cover
          source={{ uri: refreshment.image }}
          className="h-full w-full border-b border-x border-gray-100"
        />
      </TouchableOpacity>
      <Card.Content className="mt-1 w-full px-2 justify-center">
        <TouchableOpacity
          onPress={() => navigation.navigate("MenuItemDetail")}
          className="w-full flex-col justify-center"
        >
          <View className="flex-col h-10 ">
            <Text className="font-bold " style={{fontSize:hp(1.8)}}>
              {refreshment.name}
            </Text>
            <Text  className="ml-auto" style={{fontSize:hp(1.8)}}>
              R{refreshment.price}
            </Text>
          </View>
        </TouchableOpacity>
      </Card.Content>
    </Card>
  );
};

export default RefreshmentCard;

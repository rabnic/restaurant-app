import React from "react";
import { TouchableOpacity } from "react-native";
import { Card, Text } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const RefreshmentCard = ({ refreshment, navigation, menuItemId }) => {
  // console.log('----', menuItemId);
  return (
    <Card className="bg-white mx-auto my-2" style={{ height: hp(20), width:hp(21.5)}}>
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
      <Card.Content className="mt-2">
        <TouchableOpacity
          onPress={() => navigation.navigate("MenuItemDetail")}
          className="h-[65%]"
        >
          <Text variant="bodyLarge" className="font-bold">
            {refreshment.name}
          </Text>
          <Text variant="bodyMedium" className="ml-auto">
            R{refreshment.price}
          </Text>
        </TouchableOpacity>
      </Card.Content>
    </Card>
  );
};

export default RefreshmentCard;

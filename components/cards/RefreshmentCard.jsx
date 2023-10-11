import React from 'react'
import { TouchableOpacity } from 'react-native';
import { Card, Text } from 'react-native-paper'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const RefreshmentCard = ({ refreshment, navigation, menuItemId }) => {
    console.log('----', menuItemId);
    return (
        <Card className="w-[95%] flex-1 bg-white m-1" style={{ height: hp(20) }}>
            <TouchableOpacity onPress={() => navigation.navigate('MenuItemDetail', {refreshment, refreshment})} className="h-[65%]">
                <Card.Cover
                    source={{ uri: refreshment.image }}
                    className="h-full w-full border-b border-x border-gray-100"
                />
            </TouchableOpacity>
            <Card.Content className="mt-2">
                <TouchableOpacity onPress={() => navigation.navigate('MenuItemDetail')} className="h-[65%]">

                    <Text variant="bodyLarge" className="font-bold">{refreshment.name}</Text>
                    <Text variant="bodyMedium" className="ml-auto">
                        R{refreshment.price}
                    </Text>
                </TouchableOpacity>

            </Card.Content>
        </Card>
    )
}

export default RefreshmentCard
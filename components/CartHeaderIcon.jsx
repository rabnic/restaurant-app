import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Badge } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const CartHeaderIcon = ({totalQuantity}) => {
    return (
        <View style={{ width: 28, marginRight: 6 }}>
            <TouchableOpacity>
                <MaterialCommunityIcons name="cart-outline" size={28} color="whitesmoke" className="relative" />
                <Badge className="absolute -right-2 -top-2">{totalQuantity}</Badge>
            </TouchableOpacity>
        </View>
    )
}

export default CartHeaderIcon
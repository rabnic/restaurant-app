import { View, Text } from 'react-native';
import React from 'react';
import AppBarProfile from './components/AppBarProfile';

const MyProfile = ({ goBack }) => {
    return (
        <View className="flex-1">
            <AppBarProfile goBack={goBack} title={"My Profile"} />

            <Text>Testing out</Text>
        </View>
    )
}

export default MyProfile
import { View, Text } from 'react-native';
import React from 'react';
import { Appbar } from 'react-native-paper';


const AppBarProfile = ({ goBack, title }) => {
    return (
        <Appbar.Header statusBarHeight={0} style={{ backgroundColor: "white" }}>
            <Appbar.BackAction onPress={goBack} />
            <Appbar.Content title={title} />
        </Appbar.Header>
    )
}

export default AppBarProfile;
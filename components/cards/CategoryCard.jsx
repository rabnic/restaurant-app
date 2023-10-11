import React from 'react';
import { View } from 'react-native';
import { Avatar, Text } from 'react-native-paper';

function CategoryCard({category, image, selectedCategory}) {
    return (
        <View className={`flex-col items-center mr-8 pb-1 ${category == selectedCategory ? 'border-b-2' : ''}`} >
            <Avatar.Image
                source={{uri: image}}
                size={55}
            />
            <Text variant="bodyMedium" className={`font-semibold tracking-widest ${category == selectedCategory ? 'text-[#DD5A44] font-bold' : ''}`}>
                {category}
            </Text>
        </View>
    )
}

export default CategoryCard;
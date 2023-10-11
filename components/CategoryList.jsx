import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { menu } from "../database/dummyData";
import CategoryCard from "../components/cards/CategoryCard";


const CategoryList = ({ setActiveCategoryId }) => {

    const [selectedCategory, setSelectedCategory] = useState("");
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const categoryData = () => {
            setCategories(() => {
                return Object.keys(menu).map((key, index) => {
                    if (index === 0) handleSelectCategory(key, menu[key].category)
                    return {
                        categoryId: key,
                        category: menu[key].category,
                        image: menu[key].image,
                    }
                });
            });
        };

        return categoryData();
    }, [])




    const handleSelectCategory = (id,category) => {
        setSelectedCategory(category);
        setActiveCategoryId(id);
    }

    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => handleSelectCategory(item.categoryId, item.category)}
                >
                    <CategoryCard
                        selectedCategory={selectedCategory}
                        image={item.image}
                        category={item.category}
                    />
                </TouchableOpacity>
            )}
            keyExtractor={(item) => item.categoryId}
        />
    )
}

export default CategoryList
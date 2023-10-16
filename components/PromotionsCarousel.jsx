import { View, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { menu, mainPromos } from "../database/dummyData";
import CategoryCard from "../components/cards/CategoryCard";
import PromotionCard from "./cards/PromotionCard";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Card, Text } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const PromotionsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCategoryId, setActiveCategoryId] = useState();

  const carouselRef = useRef(null);
  const renderItem = ({
    item: { image, title, discount, extraInfo },
    index,
  }) => (
    <PromotionCard
      image={image}
      title={title}
      discount={discount}
      extraInfo={extraInfo}
    />
  );
  const onSnapToItem = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <View className="mb-4 flex-row w-full justify-center items-center ">
        <Carousel
          layout={"default"}
          ref={carouselRef}
          data={mainPromos}
          sliderWidth={wp(75)}
          itemWidth={wp(85)}
          renderItem={renderItem}
          onSnapToItem={onSnapToItem}
        />
      </View>
      {/* <View>
        <Pagination
          dotsLength={mainPromos.length}
          activeDotIndex={activeIndex}
          dotContainerStyle={{ height: 12 }}
          containerStyle={{
            backgroundColor: "rgba(255, 255, 255, 0.75)",
            height: 12,
          }}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 8,
            backgroundColor: "rgba(0, 0, 0, 0.92)",
          }}
          inactiveDotStyle={
            {
              // Define styles for inactive dots here
            }
          }
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View> */}
    </>
  );
};

export default PromotionsCarousel;

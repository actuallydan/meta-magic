import React, { useRef, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import QuizCard from "../components/QuizCard";
import { filteredParts, orderOfProps, spellKeys } from "../utils/config";
import CardStack from "react-native-card-stack-swiper";

export default function Quiz({ spells }) {
  const [index, setIndex] = useState(0);

  const swiperRef = useRef(null);

  const swipeAwayCard = () => {
    progress();
    swiperRef.current.swipeRight();
  };

  const progress = () => {
    setIndex(index + 1);
  };

  // const onSwipedRight = () => {
  //   console.log("right");
  // };

  // const onSwipedLeft = () => {
  //   console.log("left");
  // };

  const renderNoMoreCards = () => (
    <View>
      <Text>You're all out of cards!</Text>
    </View>
  );

  const currentSpells = spells.slice(0, index + 4);

  if (spells.length !== 0) {
    return (
      <CardStack
        duration={250}
        style={styles.cardStackContainer}
        ref={swiperRef}
        renderNoMoreCards={renderNoMoreCards}
        // onSwipedRight={onSwipedRight}
        // onSwipedLeft={onSwipedLeft}
        onSwiped={progress}
        horizontalThreshold={50}
      >
        {currentSpells.map((s) => (
          <QuizCard key={s.name} {...s} />
        ))}
      </CardStack>
    );
  }
  // spells are loading
  return (
    <View style={styles.container}>
      <Text>Loading Spells...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  cardStackContainer: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});

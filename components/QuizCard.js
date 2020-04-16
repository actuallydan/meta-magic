import React, { memo, useRef } from "react";
import { Text, View, TouchableOpacity } from "react-native";

import CardFlip from "react-native-card-flip";
import { capitalize } from "../utils";
import { spellKeys, orderOfProps, filteredParts } from "../utils/config";
import styles from "../styles/CardStyles";

export default memo(function Card({ ...spell }) {
  const keyToHide = spellKeys[Math.floor(Math.random() * spellKeys.length)];
  const cardRef = useRef(null);

  const flipCard = (e) => {
    if (cardRef.current) {
      cardRef.current.flip();
      //   setQuestionUp(!questionUp);
    }
  };
  return (
    <CardFlip style={styles.cardContainer} ref={cardRef}>
      <TouchableOpacity
        activeOpacity={1}
        style={[styles.card, styles.card1]}
        onPress={flipCard}
      >
        <Text style={styles.prompt}>
          What is the {keyToHide.replace(/([A-Z])/g, " $1").toLowerCase()} of
          this spell?
        </Text>
        {Object.keys(spell).map((_, i) => {
          const key = orderOfProps[i];
          if (key !== keyToHide && !filteredParts.includes(key)) {
            return (
              <View style={styles.textRow} key={key}>
                <Text style={styles.textBold}>{capitalize(key)}: </Text>
                <Text style={styles.text}>{spell[key]}</Text>
              </View>
            );
          }
        })}
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        style={[styles.card, styles.card2]}
        onPress={flipCard}
      >
        <View style={styles.textRow}>
          <Text style={[styles.textBold, styles.textBoldInverted]}>
            {capitalize(keyToHide)}:{" "}
          </Text>
          <Text style={[styles.text, styles.textInverted]}>
            {spell[keyToHide]}
          </Text>
        </View>
      </TouchableOpacity>
    </CardFlip>
  );
});

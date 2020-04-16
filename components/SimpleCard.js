import React, { memo, useRef } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";

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
    }
  };

  return (
    <CardFlip style={styles.cardContainer} ref={cardRef}>
      <TouchableOpacity
        activeOpacity={1}
        style={[styles.card, styles.card1]}
        onPress={flipCard}
      >
        {Object.keys(spell).map((_, i) => {
          const key = orderOfProps[i];
          if (!filteredParts.includes(key)) {
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
        <ScrollView>
          {filteredParts.map((key) => (
            <View key={key} style={styles.textRow}>
              <Text style={[styles.textBold, styles.textBoldInverted]}>
                {capitalize(key)}:
              </Text>
              <Text style={[styles.text, styles.textInverted]}>
                {spell[key]}
              </Text>
            </View>
          ))}
        </ScrollView>
      </TouchableOpacity>
    </CardFlip>
  );
});

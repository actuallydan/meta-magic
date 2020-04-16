import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Quiz from "./screens/Quiz";
import Flash from "./screens/Flash";
import AsyncStorage from "@react-native-community/async-storage";
import { shuffle } from "./utils";

export default function App() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [spells, setSpells] = useState([]);
  const [index, setIndex] = useState(0);
  const [questionUp, setQuestionUp] = useState(true);
  const swiperRef = useRef(null);

  const getSpells = async () => {
    try {
      const cachedSpells = JSON.parse(await AsyncStorage.getItem("SPELLS"));
      if (cachedSpells !== null) {
        console.log("rehydrating from cache");
        // value previously stored
        setSpells(shuffle(cachedSpells));
      } else {
        fetch("https://spell-scraper.now.sh/api/spells", {
          cache: "force-cache",
        })
          .then((res) => res.json())
          .then((data) => {
            setSpells(shuffle(data));
            AsyncStorage.setItem("SPELLS", JSON.stringify(data));
          })
          .catch((e) => {
            console.log(new Error(e));
          });
      }
    } catch (e) {
      // error reading value
      console.error(new Error(e));
    }
  };

  // get spells on load
  useEffect(() => {
    getSpells();
  }, []);

  const toggleView = () => {
    setShowQuiz(!showQuiz);
    setSpells(shuffle(spells));
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={toggleView}
          style={[styles.headerItem, showQuiz ? {} : styles.activeTab]}
        >
          <Text style={styles.headerItemText}>Flash</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={toggleView}
          style={[styles.headerItem, showQuiz ? styles.activeTab : {}]}
        >
          <Text style={styles.headerItemText}>Quiz</Text>
        </TouchableOpacity>
      </View>
      {showQuiz ? <Quiz spells={spells} /> : <Flash spells={spells} />}
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
  header: {
    marginTop: "2%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 200,
  },
  headerItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "2%",
    borderBottomWidth: 4,
    borderBottomColor: "transparent",
  },
  activeTab: {
    borderBottomColor: "#000",
  },
  headerItemText: {
    color: "#000",
  },
});

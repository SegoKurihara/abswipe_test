import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ScoreBoard from "./features/ScoreBoard/ScoreBoard";
import GameBoard from "./features/GameBoard/GameBoard";
import { txtListAB } from "./features/GameBoard/consts/abc/consts";

export type TxtList = { first: string; second: string };

export default function App() {
  const byby: number = 4;
  const txtList: TxtList = txtListAB;

  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <ScoreBoard />
      <GameBoard grid={byby} txtList={txtList} />
      <StatusBar style="auto" />
    </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    padding: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
});

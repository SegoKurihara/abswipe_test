import { View, StyleSheet } from "react-native";

const ScoreBoard: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}></View>
      <View style={styles.right}>
        <View style={styles.rightTop}></View>
        <View style={styles.rightBtm}></View>
      </View>
    </View>
  );
};

export default ScoreBoard;

const styles = StyleSheet.create({
  container: {
    flex: 0.25,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    marginTop: 35,
  },
  left: {
    flex: 0.4,
    backgroundColor: "red",
  },
  right: {
    flex: 0.6,
    backgroundColor: "blue",
    flexDirection: "column",
  },
  rightTop: {
    flex: 0.5,
    backgroundColor: "green",
    margin: 5,
  },
  rightBtm: {
    flex: 0.5,
    backgroundColor: "#ff5555",
    margin: 5,
  },
});

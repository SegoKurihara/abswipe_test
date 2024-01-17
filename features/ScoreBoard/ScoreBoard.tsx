import { View, Text, StyleSheet } from "react-native";

const ScoreBoard: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.GameTitle}>Abswipe</Text>
      </View>
      <View style={styles.right}>
        <View style={styles.rightL}>
          <Text style={styles.score}>Score</Text>
        </View>
        <View style={styles.rightR}>
          <Text style={styles.score}>bestScore</Text>
        </View>
      </View>
    </View>
  );
};

export default ScoreBoard;

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  left: {
    flex: 0.45,
    backgroundColor: "#fff",
  },
  right: {
    flex: 0.5,
    backgroundColor: "#fff",
    flexDirection: "row",
    display: "flex",
    justifyContent: "flex-end",
    margin: 5,
  },
  rightL: {
    backgroundColor: "#fffacd",
    flex: 0.5,
    alignItems: "center",
    margin: 5,
    borderRadius: 6,
    borderStyle: "solid",
    borderColor: "#ffd150",
    borderWidth: 3,
  },
  rightR: {
    backgroundColor: "#fffacd",
    flex: 0.5,
    alignItems: "center",
    margin: 5,
    borderRadius: 6,
    borderStyle: "solid",
    borderColor: "#ffd150",
    borderWidth: 3,
  },
  GameTitle:{
    fontSize: 40,
    fontFamily: "cursive",
  },
  score:{
  },
});

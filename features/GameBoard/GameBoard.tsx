import { View, StyleSheet, Button } from "react-native";
import Grid from "./Grid";
import GridRow from "./GridRow";
import { useEffect, useState } from "react";
import { Dict, TxtList } from "../../App";
import {
  GetRandomText,
  GetWordForEmptyPlace,
  // GetWordForEmptyPlace,
  RightAction,
} from "./functions/functions";

interface GameBoardProps {
  grid: number; // 何×何かを表す数
  txtList: TxtList; // 扱う文字の初期値リスト
  dictionary: Dict; // 扱う文字の辞書
}

export type gridInfo = {
  txt: string | number;
  isEmpty: boolean;
  indexRow: number;
  indexColumn: number;
};

const GameBoard: React.FC<GameBoardProps> = (props) => {
  const { grid, txtList, dictionary } = props;
  // const gridList: gridInfo[][] = [];
  const [gridList, setGridlist] = useState<gridInfo[][]>([]);
  const firstGridNum = Math.round(grid / 2);

  useEffect(() => {
    init();
  }, []);

  /**
   * 初期化
   */
  const init = () => {
    let tmpList: gridInfo[][] = [];
    for (let i = 0; i < grid; i++) {
      let tmp = [];
      for (let j = 0; j < grid; j++) {
        tmp.push({ txt: "", isEmpty: true, indexRow: i, indexColumn: j });
      }
      tmpList.push(tmp);
    }

    const length = tmpList.length;
    let count = 0;
    // while (count < firstGridNum) {
    while (count < firstGridNum) {
      const row = Math.floor(Math.random() * length);
      const column = Math.floor(Math.random() * length);
      if (tmpList[column][row].isEmpty) {
        // ランダムに文字を入れます
        GetRandomText(tmpList[column][row], txtList);
        count++;
      }
    }
    setGridlist(tmpList);
  };

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        {gridList.map((item) => (
          <GridRow
            gridObj={item}
            gridStyle={styles.item}
            rowStyle={styles.row}
          />
        ))}
      </View>
      <View style={{ marginTop: 5 }}>
        <Button
          onPress={() => {
            // 右操作
            const tmp: gridInfo[][] = RightAction(gridList, dictionary);
            // 文字を生成
            let isGot = false;
            while (!isGot) {
              isGot = GetWordForEmptyPlace(firstGridNum, tmp, txtList);
            }
            setGridlist([...tmp]);
          }}
          title="右→"
        />
      </View>
      <View style={{ marginTop: 5 }}>
        <Button
          onPress={() => {
            // 右操作
            const tmp: gridInfo[][] = RightAction(gridList, dictionary);
            // 文字を生成
            // GetWordForEmptyPlace(firstGridNum, tmp, txtList);
            setGridlist([...tmp]);
          }}
          title="下↓"
        />
      </View>
    </View>
  );
};

export default GameBoard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "yellow",
    flexDirection: "column",
    padding: 20,

    // alignItems: "center",
    // justifyContent: "center",
  },
  column: {
    flexDirection: "column",
    marginTop: 20,
  },
  row: {
    flexDirection: "row",
    // backgroundColor: "red",
    // margin: 10,
  },
  item: {
    flex: 1,
    aspectRatio: 1,
    margin: 4,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    fontSize: 34,
    backgroundColor: "#ffd150",
    // shadowColor: "#ffc41d",
    // shadowOffset: { width: 2, height: 2 },
  },
});

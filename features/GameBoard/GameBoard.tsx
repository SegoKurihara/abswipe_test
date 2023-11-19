import { View, StyleSheet, Button } from "react-native";
import Grid from "./Grid";
import GridRow from "./GridRow";
import { useEffect, useState } from "react";
import { TxtList } from "../../App";
import { getFirstText, leftAction } from "./functions/functions";

interface GameBoardProps {
  grid: number; // 何×何かを表す数
  txtList: TxtList; // 扱う文字の初期値リスト
}

export type gridInfo = {
  txt: string | number;
  isEmpty: boolean;
  indexRow: number;
  indexColumn: number;
};

const GameBoard: React.FC<GameBoardProps> = (props) => {
  const { grid, txtList } = props;
  // const gridList: gridInfo[][] = [];
  const [gridList, setGridlist] = useState<gridInfo[][]>([]);

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
    while (count < 2) {
      const row = Math.floor(Math.random() * length);
      const column = Math.floor(Math.random() * length);
      if (tmpList[column][row].isEmpty) {
        // ランダムに文字を入れます
        getFirstText(tmpList[column][row], txtList);
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
      <Button onPress={() => setGridlist(leftAction(gridList))} title="a" />
    </View>
  );
};

export default GameBoard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
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
    margin: 2,
    alignItems: "center",
    justifyContent: "center",
    border: "solid",
  },
});

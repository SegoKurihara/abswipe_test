import { TxtList } from "../../../App";
import { gridInfo } from "../GameBoard";
import { listAB } from "../consts/abc/consts";

export const getFirstText = (info: gridInfo, txtList: TxtList) => {
  const number = Math.floor(Math.random() * 10);
  info.txt = txtList["second"];
  if (number < 8) {
    info.txt = txtList["first"];
  }
  info.isEmpty = false;
};

/**
 * 単語・数字を渡すと次の単語・数字を取得します。
 * @param txt
 * @param list
 * @returns
 */
export const getNextWord = (
  txt: string | number,
  list: string[] | number[]
) => {
  const index = list.findIndex((item) => item === txt);
  return list[index + 1];
};

const canMoveRow = (gridInfo: gridInfo[]) => {
  // 行に何個文字が入っているか調べる
  const filteredRow = gridInfo.filter((item) => item.isEmpty == false);
  const filteredRowNum = filteredRow.length;
  if (filteredRowNum < gridInfo.length) {
    return true;
  }
  if (filteredRowNum == gridInfo.length) {
    gridInfo.forEach((item, index) => {
      if (item.txt == gridInfo[index - 1].txt) {
        return true;
      }
    });
  }
};

export const leftAction = (gridInfos: gridInfo[][]) => {
  const infos = gridInfos;
  const len = infos.length - 1;
  const idx = 0;
  // 0.4 karanotoki
  //   if (!infos[idx][len].isEmpty) {
  //     if (!infos[idx][len - 1].isEmpty) {
  //         infos[idx][len].txt
  //     }
  //   }
  return infos;
};

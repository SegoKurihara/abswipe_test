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

export const rightAction = (gridInfos: gridInfo[][]) => {
  const ifs = gridInfos;
  const len = ifs.length - 1;
  //   const idx = 0;

  ifs.forEach((item, idx) => {
    // 文字が入っているマスをフィルター
    const ftr = ifs[idx].filter((itm) => itm.isEmpty == false);
    // 文字が入っているマスの数
    const ftrm = ftr.length;
    // 対象の一行
    const ifsi = ifs[idx];

    // 一つしかない場合
    if (ftrm == 1) {
      const txt = ftr[0].txt;
      const clm = ftr[0].indexColumn;
      // 元のマスを空にする
      ifsi[clm] = { ...ifs[idx][clm], txt: "", isEmpty: true };
      // 右端に寄せる
      ifsi[len] = { ...ifs[idx][len], txt: txt, isEmpty: false };
    } else if (ftrm >= 2) {
      // ifsi[]
    }
    // 右端が空の場合
    //   if (!ifs[idx][len].isEmpty) {
    //   }
    //   if (!ifs[idx][len].isEmpty) {
    //     if (!ifs[idx][len - 1].isEmpty) {
    //       ifs[idx][len].txt;
    //     }
    //   }
  });
  console.log(ifs);
  return ifs;
};

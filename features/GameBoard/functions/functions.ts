import { Dict, TxtList } from "../../../App";
import { gridInfo } from "../GameBoard";
import { dictAB } from "../consts/abc/consts";

export const GetEmptyPlace = (info: gridInfo[][]) => {
  const length = info.length;
  const row = Math.floor(Math.random() * length);
  const column = Math.floor(Math.random() * length);
  if (info[column][row].isEmpty) {
    return { isEmpty: true, col: column, row: row };
  }
  return { isEmpty: false, col: column, row: row };
};

export const GetRandomText = (info: gridInfo, txtList: TxtList) => {
  const number = Math.floor(Math.random() * 10);
  info.txt = txtList["second"];
  if (number < 8) {
    info.txt = txtList["first"];
  }
  info.isEmpty = false;
};

export const GetWordForEmptyPlace = (
  num: number,
  info: gridInfo[][],
  txtList: TxtList
): boolean => {
  const obj = GetEmptyPlace(info);
  if (obj.isEmpty) {
    GetRandomText(info[obj.col][obj.row], txtList);
    return true;
  }
  return false;
};

/**
 * 単語・数字を渡すと次の単語・数字を取得します。
 * @param txt
 * @param dict
 * @returns
 */
export const GetNextWord = (
  txt: string | number,
  dict: string[] | number[]
) => {
  const index = dict.findIndex((item) => item === txt);
  return dict[index + 1];
};

export const RightAction = (gridInfos: gridInfo[][], dict: Dict) => {
  const ifs = gridInfos;
  const len = ifs.length - 1;
  //   const idx = 0;

  ifs.forEach((item, idx) => {
    // 文字が入っているマスをフィルター
    const ftr = ifs[idx].filter((itm) => itm.isEmpty == false);
    const ftrm = ftr.length; // 文字が入っているマスの数
    const ifsi = ifs[idx]; // 対象の一行

    // 一つしかない場合
    if (ftrm == 1) {
      const txt = ftr[0].txt;
      const clm = ftr[0].indexColumn;
      ifsi[clm] = { ...ifs[idx][clm], txt: "", isEmpty: true }; // 元のマスを空にする
      ifsi[len] = { ...ifs[idx][len], txt: txt, isEmpty: false }; // 右端に寄せる
    } else if (ftrm >= 2) {
      let rev = ftr.reverse();
      for (let i = 0; i < ftrm; i++) {
        if (i + 1 != ftrm) {
          if (rev[i].indexColumn !== rev[i + 1].indexColumn)
            if (rev[i].txt === rev[i + 1].txt) {
              // 同じ文字の場合
              // 2はない
              rev[i] = {
                ...rev[i],
                txt: GetNextWord(rev[i].txt, dict),
                indexColumn: 3,
                isEmpty: false,
              };
              rev[i + 1] = {
                ...rev[i + 1],
                txt: "",
                indexColumn: 2,
                isEmpty: true,
              };
              i++;
            } else {
              // 違う文字の場合
              let tmpList: gridInfo[] = [];
              rev.forEach((itm, idx) => {
                tmpList.push({ ...itm, indexColumn: 3 - idx });
              });
              rev = tmpList;
            }
        }
      }
      ifs[idx] = rev.reverse();
      for (let i = 4 - rev.length; i > 0; i--) {
        ifs[idx].unshift({
          txt: "",
          indexRow: idx,
          indexColumn: i - 1,
          isEmpty: true,
        });
      }
    }
  });
  console.log(ifs);
  return ifs;
};

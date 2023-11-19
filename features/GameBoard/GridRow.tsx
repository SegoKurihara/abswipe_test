import { View, ViewStyle } from "react-native";
import Grid from "./Grid";
import { gridInfo } from "./GameBoard";

interface GridRowProps {
  rowStyle: ViewStyle;
  gridObj: gridInfo[];
  gridStyle: ViewStyle;
}

const GridRow: React.FC<GridRowProps> = (props) => {
  const { gridObj, gridStyle, rowStyle } = props;
  return (
    <View style={rowStyle}>
      {gridObj.map((item) => (
        <Grid style={gridStyle} txt={String(item.txt)}></Grid>
      ))}
    </View>
  );
};

export default GridRow;

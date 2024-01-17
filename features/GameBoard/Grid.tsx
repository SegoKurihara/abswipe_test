import { View, ViewStyle } from "react-native";

interface GridProps {
  txt: string;
  style: ViewStyle;
}

const Grid: React.FC<GridProps> = (props) => {
  const { txt, style } = props;
  return <View style={style}>{txt}</View>;
};

export default Grid;

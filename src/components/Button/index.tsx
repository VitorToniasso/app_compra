import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./style";

type Props = TouchableOpacityProps & {
  titulo: string;
};

export function Button({ titulo, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.5}
    >
      <Text style={styles.title}>{titulo}</Text>
    </TouchableOpacity>
  );
}

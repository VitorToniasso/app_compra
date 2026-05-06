import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./style";

type Props = TouchableOpacityProps & {
  titulo: string;
  onTeste?: () => void;
};

export function Button({ titulo, onTeste, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={onTeste}
    >
      <Text style={styles.title}>{titulo}</Text>
    </TouchableOpacity>
  );
}

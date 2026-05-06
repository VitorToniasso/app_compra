import { TextInput, TextInputProps } from "react-native";
import { styles } from "./style";

export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      style={styles.container}
      placeholder="Pesquisa Algo"
      placeholderTextColor="#74798B"
    />
  );
}

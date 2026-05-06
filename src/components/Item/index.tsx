import { TouchableOpacity, View, Text } from "react-native";
import type { FilterStatus } from "@/types/FilterStatus";
import { StatusIcon } from "../StatusIcon";
import { Trash2 } from "lucide-react-native";
import { styles } from "./style";

type itemData = {
  status: FilterStatus;
  description: string;
};

type Props = {
  data: itemData;
  onStatus?: () => void;
  onRemove?: () => void;
};

export function item({ data, onStatus, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity activeOpacity={0.8} onPress={onStatus}>
          <StatusIcon status={data.status} />
        </TouchableOpacity>
        <Text style={styles.description}>{data.description}</Text>
      </View>
      <TouchableOpacity activeOpacity={0.8} onPress={onRemove}>
        <Trash2 size={18} color="#828282" />
      </TouchableOpacity>
    </View>
  );
}

import { Alert, FlatList, Image, TouchableOpacity, View, Text } from "react-native";
import { styles } from "./style";
import { Button } from "@/components/Button";
import { Input } from "@/components/Pesquisa";
import { FilterStatus } from "@/types/FilterStatus";
import { Filter } from "@/components/Filter";
import { Item } from "@/components/Item";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.DONE, FilterStatus.PENDING];

const ITEMS = [
  { id: 1, status: FilterStatus.DONE, description: "Ricardo...." },
  { id: 2, status: FilterStatus.PENDING, description: "Odebrecht...." },
  { id: 3, status: FilterStatus.PENDING, description: "Vitor...." },
  { id: 4, status: FilterStatus.DONE, description: "favela...." },
  { id: 5, status: FilterStatus.PENDING, description: "favela...." },
];

export default function Home() {
  function handleStatus() {
    console.log("Status");
  }
  function handleRemove() {
    console.log("Remover");
  }
  function handleClique() {
    return Alert.alert("Clicou");
  }
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require("@/assets/logo.png")} />
        <Input />
        <Button titulo="Adicionar" />
      </View>
      <View style={styles.lista}>
        <View style={styles.header}>
          {FILTER_STATUS.map((status) => (
            <Filter key={status} status={status} isActive={false} />
          ))}
          <TouchableOpacity style={styles.clearButton} onPress={handleClique}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={ITEMS}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Item
              data={item}
              onRemove={handleRemove}
              onStatus={handleStatus}
            />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={() => (
            <Text style={styles.empty}>Nenhum item aqui.</Text>
          )}
        />
      </View>
    </View>
  );
}

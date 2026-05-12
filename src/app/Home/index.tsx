import {
  Alert,
  FlatList,
  Image,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { styles } from "./style";
import { Button } from "@/components/Button";
import { Input } from "@/components/Pesquisa";
import { FilterStatus } from "@/types/FilterStatus";
import { Filter } from "@/components/Filter";
import { Item } from "@/components/Item";
import { useState } from "react";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.DONE, FilterStatus.PENDING];

const ITEMS = [
  { id: 1, status: FilterStatus.DONE, description: "Ricardo...." },
  { id: 2, status: FilterStatus.PENDING, description: "Odebrecht...." },
  { id: 3, status: FilterStatus.PENDING, description: "Vitor...." },
  { id: 4, status: FilterStatus.DONE, description: "favela...." },
  { id: 5, status: FilterStatus.PENDING, description: "favela...." },
];

export default function Home() {
  const [filter, setFilter] = useState(FilterStatus.PENDING);
  const [description, setDescription] = useState("");

  function handleStatus() {
    console.log("Status");
  }
  function handleRemove() {
    console.log("Remover");
  }
  function handleClique() {
    Alert.alert("Clicou");
  }
  function handleAdd() {
    if (!description.trim()) {
      Alert.alert("Atenção", "Informe a Descrição do Item");
      return;
    }
    console.log("Clicou em Adicionar");
    setDescription("");
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require("@/assets/logo.png")} />
        <Input
          placeholder="Adicione um item"
          onChangeText={setDescription}
          value={description}
        />
        <Button titulo="Adicionar" onPress={handleAdd} />
        <Text>{description}</Text>
      </View>
      <View style={styles.lista}>
        <View style={styles.header}>
          {FILTER_STATUS.map((status) => (
            <Filter
              key={status}
              status={status}
              isActive={filter === status}
              onPress={() => setFilter(status)}
            />
          ))}
          <TouchableOpacity style={styles.clearButton} onPress={handleClique}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={ITEMS}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Item data={item} onRemove={handleRemove} onStatus={handleStatus} />
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

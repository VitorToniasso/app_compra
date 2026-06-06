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
import { useEffect, useState } from "react";
import { type ItemStorage, itemStorage } from "@/storage/itemStore";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.DONE, FilterStatus.PENDING];

export default function Home() {
  const [filter, setFilter] = useState(FilterStatus.PENDING);
  const [description, setDescription] = useState("");
  const [items, setItems] = useState<ItemStorage[]>([]);

  function handleStatus() {
    console.log("Status");
  }
  async function handleRemove(id: string) {
    try {
      await itemStorage.remove(id);
      await itemByStatus();
    } catch (error) {
      console.error("Erro ao remover item:", error);
      Alert.alert("Erro", "Não foi possível remover o item.");
    }
  }
  function handleClique() {
    Alert.alert("Clicou");
  }
  async function getItens() {
    try {
      const data = await itemStorage.get();
      setItems(data);
    } catch (error) {
      console.error("Erro ao buscar itens:", error);
      Alert.alert("Erro", "Não foi possível buscar os itens.");
    }
  }

  async function handleAdd() {
    if (!description.trim()) {
      Alert.alert("Atenção", "Informe a Descrição do Item");
      return;
    }
    const newItem = {
      id: Math.random().toString().substring(2),
      description,
      status: FilterStatus.PENDING,
    };
    await itemStorage.add(newItem);
    await itemByStatus();
    Alert.alert("Adicionado", `Adicionado o item: ${description}`);
    setFilter(FilterStatus.PENDING);

    setDescription("");
  }

  async function itemByStatus() {
    try {
      const resultado = await itemStorage.getByStatus(filter);
      setItems(resultado);
    } catch {}
  }

  useEffect(() => {
    itemByStatus();
  }, [filter]);

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
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Item
              data={item}
              onRemove={() => handleRemove(item.id)}
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

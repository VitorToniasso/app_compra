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

  async function getItens() {
    try {
      const data = await itemStorage.get();
      setItems(data);
    } catch (error) {
      console.error("Erro ao buscar itens:", error);
      Alert.alert("Erro", "Não foi possível buscar os itens.");
    }
  }

  useEffect(() => {
    console.log("usado uma vez só");
  }, []);
  useEffect(() => {
    console.log("Toda vez que o estado mudar ele usa useEffect de novo");
  }, [filter]);

  function handleStatus() {
    console.log("Status");
  }
  function handleRemove() {
    console.log("Remover");
  }
  function handleClique() {
    Alert.alert("Clicou");
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
    await getItens();

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

import { Image, TouchableOpacity, View, Text } from "react-native";
import { styles } from "./style";
import { Button } from "@/components/Button";
import { Input } from "@/components/Pesquisa";
import { FilterStatus } from "@/types/FilterStatus";
import { Filter } from "@/components/Filter";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.DONE, FilterStatus.PENDING];

const ITEM = [
  { id: 1, status: FilterStatus.DONE, description: "Ricardo...." },
  { id: 2, status: FilterStatus.PENDING, description: "Odebrecht...." },
  { id: 3, status: FilterStatus.DONE, description: "Vitor...." },
  { id: 4, status: FilterStatus.PENDING, description: "Guto...." },
  { id: 5, status: FilterStatus.DONE, description: "Cidade...." },
];

export default function Home() {
  function handleStatus() {
    console.log("Adicionou Item");
  }
  function handlerRemove() {
    console.log("removeu item");
  }
  function handleLimpar() {
    console.log("Limpou Lista");
  }
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require("@/assets/logo.png")} />
        <Input />
        <Button titulo="Adicionar" onTeste={handleStatus} />
      </View>
      <View style={styles.lista}>
        <View style={styles.filter}>
          <Filter status={FilterStatus.PENDING} isActive={true} />
          <Filter status={FilterStatus.DONE} isActive={false} />
          <TouchableOpacity style={styles.clean} onPress={handleLimpar}>
            <Text style={styles.cleanText}>Limpar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

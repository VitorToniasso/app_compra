import AsyncStorage from "@react-native-async-storage/async-storage";
import { FilterStatus } from "@/types/FilterStatus";
import { useEffect } from "react";

const ITEM_STORAGE_KEY = "@comprar.items";

export type ItemStorage = {
  id: string;
  description: string;
  status: FilterStatus;
};

async function get(): Promise<ItemStorage[]> {
  try {
    const storage = await AsyncStorage.getItem(ITEM_STORAGE_KEY);
    return storage ? JSON.parse(storage) : [];
  } catch (error) {
    throw new Error("ITEMS_GET:" + error);
  }
}
async function getByStatus(status: FilterStatus): Promise<ItemStorage[]> {
  const items = await get();
  return items.filter((item) => item.status === status);
}

export const ItemStorage = { get, getByStatus };

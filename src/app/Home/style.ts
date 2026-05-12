import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d0d2d8",
    paddingTop: 62,
  },
  content: {
    alignItems: "center",
  },
  lista: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 32,
    marginTop: 24,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: "row",
    gap: 12,
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "#e4e6ec",
    paddingBottom: 16,
  },
  clearButton: {
    marginLeft: "auto",
  },
  clearText: {
    fontSize: 12,
    color: "#828282",
    fontWeight: 600,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#eef0f5",
    marginVertical: 16,
  },
  listContent: {
    paddingTop: 24,
    paddingBottom: 62,
  },
  empty: {
    textAlign: "center",
    fontSize: 14,
    color: "#808080",
  },
});

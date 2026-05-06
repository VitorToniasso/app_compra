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
  filter: {
    flexDirection: "row",
    gap: 12,
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "#e4e6ec",
    paddingBottom: 16,
  },
  clean: {
    marginLeft: "auto",
  },
  cleanText: {
    color: "#828282",
    fontSize: 12,
    fontWeight: 600,
  },
});

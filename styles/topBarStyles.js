import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  header: {
    height: 120, // Ajuste a altura conforme necessário
    paddingTop: Platform.OS === "android" ? 40 : 50, // Padding para o status bar
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  // NOVO: Container para alinhar o conteúdo dentro do gradiente
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20, // Espaçamento nas laterais
  },
  topIcon: {
    width: 32,
    height: 32,
    marginTop: 10,
    marginLeft: 20,
    tintColor: "#fff",
  },
  logoIcon: {
    marginRight: 20,
    marginTop: 10,
    width: 97,
    height: 31,
  },
});

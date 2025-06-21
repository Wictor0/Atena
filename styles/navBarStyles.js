import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "white",
    height: 95, // AUMENTEI A ALTURA, ajuste como quiser
    paddingBottom: 10, // Um respiro na parte de baixo para o 'notch' do iPhone
    paddingTop: 10, // Um respiro na parte de cima
    borderTopWidth: 1, // Uma linha sutil para separar do conteúdo
    borderTopColor: "#f0f0f0",
  },
  // Estilo para os textos ("Início", "Mapa", "Perfil")
  tabBarLabel: {
    fontSize: 12,
    fontWeight: "600",
    marginTop: 8, // Sobe um pouco o texto para ficar mais perto do ícone
  },
});

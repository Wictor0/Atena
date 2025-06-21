// Arquivo: src/styles/mapStyles.js
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // Container Principal
  container: {
    flex: 1,
    backgroundColor: "#FFF6F6", // Fundo rosa bem claro
  },
  scrollViewContent: {
    padding: 16,
  },
  // Seção de informação no topo
  headerInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    padding: 12,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#FBCFE8", // Borda rosa clarinha
    marginBottom: 16,
  },
  headerInfoIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    tintColor: "#9D174D", // Cor do ícone
  },
  headerInfoText: {
    flex: 1,
    fontSize: 14,
    color: "#881337", // Cor do texto
  },
  // Placeholder do Mapa
  mapPlaceholder: {
    height: 300, // Altura da caixa cinza do mapa
    backgroundColor: "#E5E7EB", // Cinza claro
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    height: 300, // Você pode ajustar a altura conforme quiser
    width: "100%",
    borderRadius: 20,
  },
  mapSubtitle: {
    textAlign: "center",
    marginTop: 8,
    marginBottom: 24,
    color: "#6B7280",
    fontWeight: "600",
  },
  // Legenda
  legendContainer: {
    // A legenda não precisa de um container extra por enquanto
  },
  legendTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4B5563",
    marginBottom: 12,
    textTransform: "uppercase", // Deixa o texto em maiúsculas
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#F3F4F6",
  },
  legendIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  legendIcon: {
    width: 20,
    height: 20,
    tintColor: "#fff", // Ícones brancos dentro dos círculos coloridos
  },
  legendText: {
    flex: 1, // Faz o texto ocupar o espaço restante
    fontSize: 14,
    color: "#374151",
  },
});

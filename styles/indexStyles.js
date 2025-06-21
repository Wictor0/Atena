import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff0f5",
  },
  alertTitle: {
    marginTop: 24,
    textAlign: "center",
    color: "#6E5A7A",
    fontWeight: "600",
  },
  emergencyButton: {
    marginTop: 12,
    backgroundColor: "#E83F5B",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    flexDirection: "row", // ⬅️ Agora alinha ícone + textos lado a lado
    gap: 12,
  },
  emergencyIcon: {
    width: 32,
    height: 32,
  },
  emergencyTextContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  emergencyText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "left",
  },
  emergencySubtext: {
    fontWeight: "400",
    fontSize: 12,
    color: "#fff",
    textAlign: "left",
  },

  sectionTitle: {
    marginTop: 24,
    textAlign: "center",
    color: "#6E5A7A",
    fontWeight: "600",
  },
  transportContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    gap: 12,
  },
  transportCard: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  transportIcon: {
    width: 28,
    height: 28,
    tintColor: "#fff",
  },
  transportText: {
    color: "#000",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 12,
  },
  safePlacesHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: -10,
    marginTop: 32,
  },
  safePlacesTitle: {
    color: "#6E5A7A",
    fontWeight: "700",
    fontSize: 14,
    marginBottom: 0,
  },
  pinIcon: {
    width: 24,
    height: 24,
  },
  safePlacesContainer: {
    marginTop: 24,
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#A59F9F",
    maxHeight: 280,
  },
  safePlacesScroll: {
    flexGrow: 0,
  },
  placeCard: {
    backgroundColor: "#FAF5FF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#993DEE",
  },
  placeTitle: {
    fontWeight: "700",
    color: "#6E5A7A",
  },
  placeAddress: {
    fontSize: 12,
    marginBottom: 12,
    color: "#6E5A7A",
  },
  buttonRow: {
    flexDirection: "row",
    gap: 12,
  },
  goButton: {
    flex: 1,
    backgroundColor: "#993DEE",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  goButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
  callButton: {
    flex: 1,
    backgroundColor: "#F7F0FF",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  callButtonText: {
    color: "#993DEE",
    fontWeight: "600",
  },

  // --- Estilos do Modal ---
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fundo escuro semitransparente
    justifyContent: "flex-end", // Alinha o modal na parte de baixo
  },
  modalContent: {
    backgroundColor: "white",
    padding: 24,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
  },
  modalHandle: {
    width: 40,
    height: 5,
    backgroundColor: "#D1D5DB", // Cinza claro
    borderRadius: 2.5,
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 24,
  },
  inputLabel: {
    alignSelf: "flex-start", // Alinha o texto à esquerda
    fontSize: 14,
    fontWeight: "500",
    color: "#374151",
    marginBottom: 8,
  },
  modalInput: {
    width: "100%",
    backgroundColor: "#F9FAFB", // Fundo do input
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 44,
    marginBottom: 44, // Espaço extra na parte de baixo
  },
  cancelButton: {
    backgroundColor: "#E5E7EB", // Cinza do botão cancelar
    paddingVertical: 14,
    borderRadius: 8,
    flex: 1, // Ocupa metade do espaço
    marginRight: 8,
    alignItems: "center",
  },
  addButton: {
    flex: 1, // Ocupa metade do espaço
    marginLeft: 8,
  },
  addButtonGradient: {
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4B5563",
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },

  // --- Estilos do Modal de Carro (Partes Novas) ---
  uploadPromptContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3E8FF", // Fundo Roxo bem claro
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E9D5FF",
    borderStyle: "dashed",
  },
  uploadPromptIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    tintColor: "#8E3CD3",
  },
  uploadPromptText: {
    flex: 1,
    color: "#6B21A8",
    fontSize: 14,
  },
  uploadCircleButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#C4B5FD",
    borderStyle: "dashed",
    backgroundColor: "#F5F3FF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  uploadCircleIcon: {
    width: 40,
    height: 40,
    tintColor: "#8B5CF6",
  },
});

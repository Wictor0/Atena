// Arquivo: src/styles/profileStyles.js
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // Container Principal
  container: {
    flex: 1,
    backgroundColor: "#FFF6F6", // Fundo rosa bem claro
  },
  scrollViewContent: {
    padding: 16,
    paddingBottom: 100, // Espaço extra para não ser coberto pelo botão flutuante
  },
  // Card Genérico
  sectionCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
    color: "#333",
  },
  // Header do Perfil
  profileHeader: {
    flexDirection: "row",
    marginBottom: 22,
    justifyContent: "space-between",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#e0e0e0",
    marginBottom: 12,
  },
  userName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  memberSince: {
    fontSize: 14,
    color: "#888",
  },
  memberSinceYear: {
    fontSize: 14,
    color: "#888",
    marginBottom: 12,
  },
  editButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 15,
    maxHeight: 40,
    marginTop: 12,
  },
  editButtonText: {
    marginLeft: 6,
    fontWeight: "600",
    color: "#555",
  },
  // Stats
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  statCard: {
    alignItems: "center",
    backgroundColor: "#FFF0F5",
    padding: 12,
    borderRadius: 15,
    width: 96,
    height: 86,
  },
  statIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  statNumberYellow: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FBBF24",
  },
  statNumberRed: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#D92D20",
  },
  statNumberPurple: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#D3579B",
  },
  statText: {
    fontSize: 12,
    color: "#888",
    textAlign: "center",
  },
  // Contatos de Emergência
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF0F5",
    padding: 12,
    borderRadius: 10,
    marginBottom: 8,
  },
  contactInfo: {
    flex: 1,
    marginLeft: 12,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E93A7A",
  },
  contactName: {
    fontWeight: "bold",
  },
  contactPhone: {
    color: "#888",
  },
  contactRelationship: {
    color: "#E93A7A",
  },
  // Formulário
  contactForm: {
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    marginTop: 12,
  },
  addContactButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    marginBottom: 10,
  },
  addContactText: {
    color: "#8E3CD3",
    fontWeight: "bold",
    marginLeft: 8,
  },
  formInput: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
  },
  primaryButton: {
    backgroundColor: "#8E3CD3",
    padding: 16,
    borderRadius: 15,
    alignItems: "center",
  },
  primaryButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  // Atalho de Emergência
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    padding: 12,
    marginBottom: 0,
  },
  switchTextContainer: {
    flex: 1, // Ocupa o espaço disponível
  },

  switchTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  switchSubtitle: {
    fontSize: 14,
    color: "#888",
  },
  shortcutChoiceLabel: {
    marginTop: 24, // Espaço depois do switch
    marginBottom: 8,
    color: "#555",
    fontWeight: "500",
  },
  shortcutOption: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent", // Fundo transparente por padrão
    borderWidth: 1,
    borderColor: "#E5E7EB", // Borda cinza clara
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  // NOVO: Estilo para a opção SELECIONADA
  shortcutOptionSelected: {
    backgroundColor: "#FEF9C3", // Fundo amarelo claro
    borderColor: "#FACC15", // Borda amarela
  },
  // NOVO: Estilo base para o ícone do atalho
  shortcutIcon: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  // NOVO: Estilo base para o texto do atalho
  shortcutText: {
    fontSize: 16,
    color: "#374151", // Texto cinza escuro
  },
  // NOVO: Estilo para o texto da opção SELECIONADA
  shortcutTextSelected: {
    color: "#CA8A04", // Texto amarelo escuro
    fontWeight: "600",
  },
  infoBox: {
    flexDirection: "collumn",
    backgroundColor: "#FFF9C4",
    padding: 12,
    borderRadius: 10,
    marginTop: 8,
  },
  boldText: {
    fontWeight: "bold",
    color: "#CCBE00",
    marginLeft: 8,
  },
  infoText: {
    flex: 1,
    marginLeft: 8,
    color: "#CCBE00",
  },
  // Outras Configurações
  settingsRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  allSettings: {
    marginLeft: 18,
  },
  // Botão Flutuante
  floatingEmergencyButton: {
    position: "absolute",
    bottom: 16,
    left: 16,
    right: 16,
    backgroundColor: "#D92D20",
    borderRadius: 15,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },
  floatingButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 10,
  },
});

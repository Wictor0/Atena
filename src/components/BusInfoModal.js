// Arquivo: src/components/BusInfoModal.js

import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../../styles/indexStyles"; // Vamos adicionar os estilos aqui

// O componente recebe 3 props:
// visible: um booleano (true/false) para mostrar ou esconder o modal
// onClose: uma função para ser chamada quando o modal for fechado (ex: pelo botão Cancelar)
// onAdd: uma função para ser chamada quando o botão Adicionar for clicado
export default function BusInfoModal({ visible, onClose, onAdd }) {
  const [lineNumber, setLineNumber] = useState("");
  const [busPrefix, setBusPrefix] = useState("");

  const handleAdd = () => {
    // Passa os dados para a função onAdd e fecha o modal
    onAdd({ lineNumber, busPrefix });
    setLineNumber("");
    setBusPrefix("");
    onClose();
  };

  return (
    <Modal
      animationType="slide" // Efeito de deslizar de baixo para cima
      transparent={true} // Fundo transparente para ver a tela de trás
      visible={visible}
      onRequestClose={onClose}
    >
      {/* KeyboardAvoidingView ajusta o modal quando o teclado aparece */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.modalOverlay}
      >
        <TouchableOpacity
          style={{ flex: 1 }}
          activeOpacity={1}
          onPressOut={onClose} // Fecha o modal ao clicar no fundo
        />
        <View style={styles.modalContent}>
          <View style={styles.modalHandle} />
          <Text style={styles.modalTitle}>ADICIONAR DADOS</Text>

          <Text style={styles.inputLabel}>Número da linha</Text>
          <TextInput
            style={styles.modalInput}
            placeholder="Escreva aqui"
            value={lineNumber}
            onChangeText={setLineNumber}
          />

          <Text style={styles.inputLabel}>Prefixo do ônibus</Text>
          <TextInput
            style={styles.modalInput}
            placeholder="Escreva aqui"
            value={busPrefix}
            onChangeText={setBusPrefix}
          />

          <View style={styles.modalButtonContainer}>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.cancelButtonText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
              <LinearGradient
                colors={["#D3579B", "#8E3CD3"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.addButtonGradient}
              >
                <Text style={styles.addButtonText}>Adicionar</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

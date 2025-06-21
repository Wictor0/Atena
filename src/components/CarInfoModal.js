// Arquivo: src/components/CarInfoModal.js

import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../../styles/indexStyles"; // Reutilizaremos muitos estilos

export default function CarInfoModal({ visible, onClose, onAdd }) {
  const [driverName, setDriverName] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const [carModel, setCarModel] = useState("");

  const handleAdd = () => {
    onAdd({ driverName, licensePlate, carModel });
    // Limpa os campos e fecha o modal
    setDriverName("");
    setLicensePlate("");
    setCarModel("");
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.modalOverlay}
      >
        {/* Permite fechar o modal ao clicar no fundo */}
        <TouchableOpacity
          style={{ flex: 1 }}
          activeOpacity={1}
          onPressOut={onClose}
        />

        <View style={styles.modalContent}>
          <View style={styles.modalHandle} />
          <Text style={styles.modalTitle}>ADICIONAR DADOS</Text>

          {/* Seção de Upload de Imagem */}
          <View style={styles.uploadPromptContainer}>
            <Image
              source={require("../screens/assets/upload-prompt-icon.png")} // Caminho para seu ícone
              style={styles.uploadPromptIcon}
            />
            <Text style={styles.uploadPromptText}>
              Adicione o prints dos dados do motorista para preenchimento
              automático
            </Text>
          </View>

          <TouchableOpacity style={styles.uploadCircleButton}>
            <Image
              source={require("../screens/assets/camera-icon.png")} // Caminho para seu ícone
              style={styles.uploadCircleIcon}
            />
          </TouchableOpacity>

          {/* Inputs de Texto */}
          <Text style={styles.inputLabel}>Nome do motorista</Text>
          <TextInput
            style={styles.modalInput}
            placeholder="Escreva aqui"
            value={driverName}
            onChangeText={setDriverName}
          />

          <Text style={styles.inputLabel}>Placa do carro</Text>
          <TextInput
            style={styles.modalInput}
            placeholder="Escreva aqui"
            value={licensePlate}
            onChangeText={setLicensePlate}
          />

          <Text style={styles.inputLabel}>Modelo do carro</Text>
          <TextInput
            style={styles.modalInput}
            placeholder="Escreva aqui"
            value={carModel}
            onChangeText={setCarModel}
          />

          {/* Botões de Ação */}
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

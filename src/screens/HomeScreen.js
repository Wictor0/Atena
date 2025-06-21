// Arquivo: src/screens/HomeScreen.js - CORRIGIDO

import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "../../styles/indexStyles";

// Importe o novo componente do Modal
import BusInfoModal from "../components/BusInfoModal";
import CarInfoModal from "../components/CarInfoModal";

// imports de imagens
import AlertIcon from "./assets/alert.png";
import CarIcon from "./assets/car.png";
import BusIcon from "./assets/bus.png";
import PinIcon from "./assets/pin.png";

export default function HomeScreen() {
  const [isBusModalVisible, setBusModalVisible] = useState(false);
  const [isCarModalVisible, setCarModalVisible] = useState(false);

  const handleAddBusData = (data) => {
    console.log("Dados do ônibus recebidos:", data);
  };

  const handleAddCarData = (data) => {
    console.log("Dados do carro recebidos:", data);
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Alerta de emergência */}
      <Text style={styles.alertTitle}>
        APERTE NO BOTÃO ABAIXO EM SITUAÇÃO DE EMERGÊNCIA
      </Text>
      <TouchableOpacity style={styles.emergencyButton}>
        <Image
          // Note que você está importando 'AlertIcon' no topo, mas usando require() aqui.
          // Vamos usar a variável importada para manter a consistência.
          source={AlertIcon}
          style={styles.emergencyIcon}
        />
        <View style={styles.emergencyTextContainer}>
          <Text style={styles.emergencyText}>ESTOU EM RISCO DE VIOLÊNCIA</Text>
          <Text style={styles.emergencySubtext}>
            CLIQUE PARA ALERTAR A REDE DE APOIO
          </Text>
        </View>
      </TouchableOpacity>

      {/* Transporte */}
      <Text style={styles.sectionTitle}>
        ESTOU SAINDO DE CASA E GOSTARIA{"\n"}
        DE COMPARTILHAR AS INFORMAÇÕES
      </Text>
      <View style={styles.transportContainer}>
        <TouchableOpacity
          style={styles.transportCard}
          onPress={() => setCarModalVisible(true)}
        >
          <View style={[styles.iconCircle, { backgroundColor: "#E93A7A" }]}>
            <Image source={CarIcon} style={styles.transportIcon} />
          </View>
          <Text style={styles.transportText}>CARROS DE APLICATIVOS</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.transportCard}
          onPress={() => setBusModalVisible(true)}
        >
          <View style={[styles.iconCircle, { backgroundColor: "#993DEE" }]}>
            <Image source={BusIcon} style={styles.transportIcon} />
          </View>
          <Text style={styles.transportText}>VIAGEM DE ÔNIBUS</Text>
        </TouchableOpacity>
      </View>

      {/* Locais seguros */}
      <View style={styles.safePlacesHeader}>
        <Image source={PinIcon} style={styles.pinIcon} />
        <Text style={styles.safePlacesTitle}>
          LOCAIS SEGUROS PRÓXIMOS A VOCÊ
        </Text>
      </View>
      <View style={styles.safePlacesContainer}>
        {/* Este ScrollView aninhado pode causar problemas de rolagem em alguns casos.
            Se o conteúdo não for muito grande, um <View> normal pode ser suficiente.
            Mas por agora, vamos manter. */}
        <ScrollView style={styles.safePlacesScroll}>
          <View style={styles.placeCard}>
            <Text style={styles.placeTitle}>Delegacia da Mulher - Centro</Text>
            <Text style={styles.placeAddress}>
              Rua das Flores, 123 - Centro
            </Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.goButton}>
                <Text style={styles.goButtonText}>Ir até lá</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.callButton}>
                <Text style={styles.callButtonText}>LIGAR</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.placeCard}>
            <Text style={styles.placeTitle}>Casa da Mulher Brasileira</Text>
            <Text style={styles.placeAddress}>
              Av. Liberdade, 456 - Liberdade
            </Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.goButton}>
                <Text style={styles.goButtonText}>Ir até lá</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.callButton}>
                <Text style={styles.callButtonText}>LIGAR</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Renderiza os dois modais. Apenas o que tiver 'visible={true}' aparecerá. */}
          <BusInfoModal
            visible={isBusModalVisible}
            onClose={() => setBusModalVisible(false)}
            onAdd={handleAddBusData}
          />
          <CarInfoModal // <-- NOVO
            visible={isCarModalVisible}
            onClose={() => setCarModalVisible(false)}
            onAdd={handleAddCarData}
          />
        </ScrollView>
      </View>
    </ScrollView>
  );
}

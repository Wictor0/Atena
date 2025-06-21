// Arquivo: src/screens/MapScreen.js (COM MAPA REAL)

import React from "react";
import { View, Text, Image, ScrollView, SafeAreaView } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps"; // 1. Importa o mapa e o marcador
import { styles } from "../../styles/mapStyle";

// Imagens (já carregadas estaticamente)
const signalIcon = require("./assets/signal-icon.png");
const locationPinIcon = require("./assets/location-pin-icon.png");
const walkingIcon = require("./assets/walking-icon.png");
const homeIcon = require("./assets/home-icon.png");
const busIcon = require("./assets/bus-icon.png");
const appCarIcon = require("./assets/app-car-icon.png");

// 2. Adicionamos coordenadas de exemplo aos nossos itens da legenda
const legendItems = [
  {
    key: "me",
    bgColor: "#8B5CF6",
    iconSource: locationPinIcon,
    text: "Minha localização",
    coordinate: { latitude: -8.0578, longitude: -34.8829 }, // Ex: Marco Zero, Recife
  },
  {
    key: "walking",
    bgColor: "#EF4444",
    iconSource: walkingIcon,
    text: "A mulher está andando sozinha e se sente em risco.",
    coordinate: { latitude: -8.06, longitude: -34.884 },
  },
  {
    key: "home",
    bgColor: "#EAB308",
    iconSource: homeIcon,
    text: "A mulher está em casa e se sente em risco.",
    coordinate: { latitude: -8.062, longitude: -34.885 },
  },
  {
    bgColor: "#3B82F6", // Azul
    iconSource: busIcon, // Usando a variável
    text: "A mulher está em um ônibus e se sente em risco.",
  },
  {
    bgColor: "#EC4899", // Rosa
    iconSource: appCarIcon, // Usando a variável
    text: "A mulher está em carro de app e se sente em risco.",
  },
];

export default function MapScreen() {
  // 3. Define uma região inicial para o mapa focar
  const initialRegion = {
    latitude: -8.0578, // Ponto central do mapa (latitude)
    longitude: -34.8829, // Ponto central do mapa (longitude)
    latitudeDelta: 0.0922, // Zoom do mapa (quanto menor, mais próximo)
    longitudeDelta: 0.0421, // Zoom do mapa
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.headerInfoContainer}>
          <Image source={signalIcon} style={styles.headerInfoIcon} />
          <Text style={styles.headerInfoText}>
            ACOMPANHE OUTRAS MULHERES QUE ESTÃO EMITINDO SINAIS DE ALERTA
            PRÓXIMAS A VOCÊ
          </Text>
        </View>

        {/* 4. SUBSTITUÍMOS A VIEW CINZA PELO MAPVIEW */}
        <MapView
          provider={PROVIDER_GOOGLE} // Essencial para usar Google Maps
          style={styles.map}
          initialRegion={initialRegion}
        >
          {/* 5. Adicionamos os Marcadores (pins) no mapa */}
          {legendItems.map((item) => (
            <Marker
              key={item.key}
              coordinate={item.coordinate}
              title={item.text}
            >
              {/* Usamos um ícone customizado para o marcador */}
              <View
                style={[
                  styles.legendIconCircle,
                  { backgroundColor: item.bgColor },
                ]}
              >
                <Image source={item.iconSource} style={styles.legendIcon} />
              </View>
            </Marker>
          ))}
        </MapView>

        <Text style={styles.mapSubtitle}>
          CLIQUE EM UM DOS PONTOS PARA SABER COMO AJUDAR UMA USUÁRIA
        </Text>

        {/* A legenda continua a mesma */}
        <View style={styles.legendContainer}>
          <Text style={styles.legendTitle}>Legenda</Text>
          {legendItems.map((item) => (
            <View key={item.key} style={styles.legendItem}>
              <View
                style={[
                  styles.legendIconCircle,
                  { backgroundColor: item.bgColor },
                ]}
              >
                <Image source={item.iconSource} style={styles.legendIcon} />
              </View>
              <Text style={styles.legendText}>{item.text}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
//

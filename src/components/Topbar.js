// Arquivo: src/components/Topbar.js - CORRIGIDO

import React from "react";
import { View, Text, Image } from "react-native"; // Adicionei View para o container do conteúdo
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../../styles/topBarStyles";

export function TopBar() {
  return (
    // 1. APLICANDO O ESTILO DO HEADER AQUI
    <LinearGradient
      style={styles.header}
      colors={["#8E3CD3", "#D3579B"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      {/* 2. É uma boa prática envolver o conteúdo em uma View para garantir o alinhamento */}
      <View style={styles.contentContainer}>
        <Image source={require("./assets/grid.png")} style={styles.topIcon} />
        <Image source={require("./assets/atena.png")} style={styles.logoIcon} />
      </View>
    </LinearGradient>
  );
}

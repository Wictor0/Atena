// Arquivo: src/components/Navbar.js - APLICANDO ESTILOS

import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// 1. IMPORTANDO SEU ARQUIVO DE ESTILO
import { styles } from "../../styles/navBarStyles"; // Verifique se este caminho está 100% correto

// Imports das telas
import HomeScreen from "../screens/HomeScreen.js";
import MapScreen from "../screens/MapScreen.js";
import ProfileScreen from "../screens/ProfileScreen.js";

// Imports de componentes e constantes
import { Colors } from "../constants/colors.js";
import { TopBar } from "./Topbar.js";
import HomeIcon from "./assets/home.png";
import MapIcon from "./assets/map.png";
import ProfileIcon from "./assets/profile.png";

const Tab = createBottomTabNavigator();

export default function Navbar() {
  const colorScheme = "light";

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        header: () => <TopBar />,

        // 2. APLICANDO OS ESTILOS QUE CRIAMOS
        tabBarStyle: styles.tabBar, // Estilo do container da barra
        tabBarLabelStyle: styles.tabBarLabel, // Estilo dos textos
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={HomeScreen}
        options={{
          title: "Início",
          tabBarIcon: ({ color }) => (
            <Image
              source={HomeIcon}
              style={{ width: 26, height: 26, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Mapa"
        component={MapScreen}
        options={{
          title: "Mapa",
          tabBarIcon: ({ color }) => (
            <Image
              source={MapIcon}
              style={{ width: 26, height: 26, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => (
            <Image
              source={ProfileIcon}
              style={{ width: 26, height: 26, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

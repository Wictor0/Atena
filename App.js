// Arquivo: App.js - VERSÃO FINAL E LIMPA

import React from "react";
import { NavigationContainer } from "@react-navigation/native";

// A única responsabilidade do App.js é iniciar o container da navegação
// e chamar nosso navegador principal, o Navbar.
import Navbar from "./src/components/Navbar";

export default function App() {
  return (
    <NavigationContainer>
      <Navbar />
    </NavigationContainer>
  );
}

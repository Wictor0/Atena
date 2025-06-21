// Arquivo: src/screens/ProfileScreen.js - VERSÃO CORRIGIDA

import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Switch,
  SafeAreaView,
} from "react-native";
import { styles } from "../../styles/profileStyles";

export default function ProfileScreen() {
  const [isSwitchEnabled, setIsSwitchEnabled] = useState(false);
  // ADICIONE ESTA LINHA:
  const [selectedShortcut, setSelectedShortcut] = useState("volume_down_2x"); // 'id' da opção padrão

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* --- SEÇÃO HEADER PERFIL --- */}
        <View style={styles.sectionCard}>
          <View style={styles.profileHeader}>
            {/* Avatar continua o mesmo */}
            <Image
              style={styles.avatar}
              source={require("./assets/avatar-placeholder.png")}
            />

            {/* Container para os textos */}
            <View style={styles.userInfo}>
              <Text style={styles.userName}>Maria Silva</Text>
              <Text style={styles.userEmail}>maria.silva@email.com</Text>
              <Text style={styles.memberSince}>Membro desde Junho</Text>
              <Text style={styles.memberSinceYear}>2025</Text>
            </View>
            {/* Botão Editar */}
            <TouchableOpacity style={styles.editButton}>
              <Image
                source={require("./assets/edit-icon.png")}
                style={{ width: 16, height: 16 }}
              />
              <Text style={styles.editButtonText}>Editar</Text>
            </TouchableOpacity>
          </View>

          {/* --- SEÇÃO STATS --- */}
          <View style={styles.statsContainer}>
            {/* Card 1: Amarelo */}
            <View style={[styles.statCard, { backgroundColor: "#FEF9C3" }]}>
              <Text style={[styles.statNumber, styles.statNumberYellow]}>
                1
              </Text>
              <Text style={styles.statText}>Contatos de Emergência</Text>
            </View>

            {/* Card 2: Rosa */}
            <View style={[styles.statCard, { backgroundColor: "#FCE7F3" }]}>
              <Text style={[styles.statNumber, styles.statNumberRed]}>0</Text>
              <Text style={styles.statText}>Alertas Ativados</Text>
            </View>

            {/* Card 3: Roxo */}
            <View style={[styles.statCard, { backgroundColor: "#EDE9FE" }]}>
              <Text style={[styles.statNumber, styles.statNumberPurple]}>
                24/7
              </Text>
              <Text style={styles.statText}>Proteção Ativa</Text>
            </View>
          </View>
        </View>

        {/* --- SEÇÃO CONTATOS DE EMERGÊNCIA --- */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <Image
              source={require("./assets/contacts-icon.png")}
              style={{ width: 18, height: 18 }}
            />
            <Text style={styles.sectionTitle}>Contatos de Emergência</Text>
          </View>
          <View style={styles.contactItem}>
            <View style={[styles.iconCircle, { backgroundColor: "#E93A7A" }]}>
              <Image
                source={require("./assets/user-icon.png")}
                style={{ width: 12, height: 15 }}
              />
            </View>
            <View style={styles.contactInfo}>
              <Text style={styles.contactName}>Maria Silva</Text>
              <Text style={styles.contactPhone}>(11) 98989-8989</Text>
              <Text style={styles.contactRelationship}>Mãe</Text>
            </View>
            <TouchableOpacity>
              <Image
                source={require("./assets/trash-icon.png")}
                style={{ width: 18, height: 18, marginRight: 8 }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.contactForm}>
            <TouchableOpacity style={styles.addContactButton}>
              <Image
                source={require("./assets/plus-icon.png")}
                style={{ width: 24, height: 24 }}
              />
              <Text style={styles.addContactText}>Adicionar Novo Contato</Text>
            </TouchableOpacity>
            <TextInput placeholder="Nome do Contato" style={styles.formInput} />
            <TextInput
              placeholder="Telefone"
              style={styles.formInput}
              keyboardType="phone-pad"
            />
            <TextInput
              placeholder="Relacionamento (ex: Amiga, Mãe...)"
              style={styles.formInput}
            />
            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>Adicionar Contato</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* --- SEÇÃO ATALHO DE EMERGÊNCIA --- */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <Image
              source={require("./assets/shortcut-icon.png")}
              style={{ width: 20, height: 20 }}
            />
            <Text style={styles.sectionTitle}>Atalho de Emergência</Text>
          </View>
          {/* --- SEÇÃO ATALHO DE EMERGÊNCIA --- */}
          {/* A parte do Switch continua igual e correta */}
          <View style={styles.switchContainer}>
            <View style={styles.switchTextContainer}>
              <Text style={styles.switchTitle}>Atalho Ativo</Text>
              <Text style={styles.switchSubtitle}>
                Ativar alerta rapidamente
              </Text>
            </View>

            <Switch
              value={isSwitchEnabled}
              onValueChange={() => setIsSwitchEnabled(!isSwitchEnabled)}
              trackColor={{ false: "#767577", true: "#8E3CD3" }}
              thumbColor="#f4f3f4"
            />
          </View>

          <Text style={styles.shortcutChoiceLabel}>
            Escolha seu atalho de emergência:
          </Text>

          {/* Lista de Opções Corrigida - Escrita diretamente */}

          {/* Opção 1: Volume para Baixo */}
          <TouchableOpacity
            style={[
              styles.shortcutOption,
              selectedShortcut === "volume_down_2x" &&
                styles.shortcutOptionSelected,
            ]}
            onPress={() => setSelectedShortcut("volume_down_2x")}
          >
            <Image
              source={require("./assets/volume-down-icon.png")} // Caminho estático
              style={[
                styles.shortcutIcon,
                {
                  tintColor:
                    selectedShortcut === "volume_down_2x"
                      ? "#CA8A04"
                      : "#6B7280",
                },
              ]}
            />
            <Text
              style={[
                styles.shortcutText,
                selectedShortcut === "volume_down_2x" &&
                  styles.shortcutTextSelected,
              ]}
            >
              Apertar volume para baixo 2x
            </Text>
          </TouchableOpacity>

          {/* Opção 2: Volume para Cima */}
          <TouchableOpacity
            style={[
              styles.shortcutOption,
              selectedShortcut === "volume_up_2x" &&
                styles.shortcutOptionSelected,
            ]}
            onPress={() => setSelectedShortcut("volume_up_2x")}
          >
            <Image
              source={require("./assets/volume-icon.png")} // Caminho estático
              style={[
                styles.shortcutIcon,
                {
                  tintColor:
                    selectedShortcut === "volume_up_2x" ? "#CA8A04" : "#6B7280",
                },
              ]}
            />
            <Text
              style={[
                styles.shortcutText,
                selectedShortcut === "volume_up_2x" &&
                  styles.shortcutTextSelected,
              ]}
            >
              Apertar volume para cima 2x
            </Text>
          </TouchableOpacity>

          {/* Opção 3: Botão Power */}
          <TouchableOpacity
            style={[
              styles.shortcutOption,
              selectedShortcut === "power_3x" && styles.shortcutOptionSelected,
            ]}
            onPress={() => setSelectedShortcut("power_3x")}
          >
            <Image
              source={require("./assets/power-icon.png")} // Caminho estático
              style={[
                styles.shortcutIcon,
                {
                  tintColor:
                    selectedShortcut === "power_3x" ? "#CA8A04" : "#6B7280",
                },
              ]}
            />
            <Text
              style={[
                styles.shortcutText,
                selectedShortcut === "power_3x" && styles.shortcutTextSelected,
              ]}
            >
              Apertar botão power 3x
            </Text>
          </TouchableOpacity>

          {/* Opção 4: Balançar o Telefone */}
          <TouchableOpacity
            style={[
              styles.shortcutOption,
              selectedShortcut === "shake" && styles.shortcutOptionSelected,
            ]}
            onPress={() => setSelectedShortcut("shake")}
          >
            <Image
              source={require("./assets/shake-icon.png")} // Caminho estático
              style={[
                styles.shortcutIcon,
                {
                  tintColor:
                    selectedShortcut === "shake" ? "#CA8A04" : "#6B7280",
                },
              ]}
            />
            <Text
              style={[
                styles.shortcutText,
                selectedShortcut === "shake" && styles.shortcutTextSelected,
              ]}
            >
              Balançar o telefone
            </Text>
          </TouchableOpacity>
          <View style={styles.infoBox}>
            <Text style={styles.boldText}>Importante:</Text>
            <Text style={styles.infoText}>
              Este atalho ativará imediatamente o alerta de emergência e enviará
              sua localização para todos os contatos de emergência.
            </Text>
          </View>
        </View>

        {/* --- SEÇÃO OUTRAS CONFIGURAÇÕES --- */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <Image
              source={require("./assets/shield-icon.png")}
              style={{ width: 20, height: 20 }}
            />
            <Text style={styles.sectionTitle}>Outras Configurações</Text>
          </View>
          <View style={styles.allSettings}>
            <TouchableOpacity style={styles.settingsRow}>
              <Image
                source={require("./assets/notifications-icon.png")}
                style={{ width: 20, height: 20, marginRight: 12 }}
              />
              <Text>Notificações</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingsRow}>
              <Image
                source={require("./assets/privacy-icon.png")}
                style={{ width: 20, height: 20, marginRight: 12 }}
              />
              <Text>Privacidade</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingsRow}>
              <Image
                source={require("./assets/theme-icon.png")}
                style={{ width: 20, height: 20, marginRight: 12 }}
              />
              <Text>Temas do App</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingsRow}>
              <Image
                source={require("./assets/support-icon.png")}
                style={{ width: 20, height: 20, marginRight: 12 }}
              />
              <Text>Ajuda e Suporte</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* --- BOTÃO FLUTUANTE DE EMERGÊNCIA --- */}
      <TouchableOpacity style={styles.floatingEmergencyButton}>
        <Image
          source={require("./assets/big-alert-icon.png")}
          style={{ width: 24, height: 24 }}
        />
        <Text style={styles.floatingButtonText}>
          ESTOU EM RISCO DE VIOLÊNCIA
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

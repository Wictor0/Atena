# Atena 🛡️
*Seu aplicativo de rede de apoio e segurança pessoal para mulheres.*

## Descrição ℹ️
Atena é um aplicativo mobile focado na segurança pessoal e na criação de uma rede de apoio para mulheres. Ele foi projetado para oferecer ferramentas rápidas e intuitivas em situações de risco, permitindo que as usuárias alertem sua rede de contatos de emergência, compartilhem informações de trajeto de forma segura e visualizem um mapa com alertas de outras mulheres na comunidade, promovendo um ambiente de cuidado e proteção mútua.

## Funcionalidades 📋
1. **Botão de Pânico e Alerta de Risco**
   - Um botão de emergência proeminente na tela inicial para alertar rapidamente uma rede de apoio pré-configurada.
   - Um botão flutuante acessível em todas as telas para garantir acesso rápido em qualquer situação.

2. **Compartilhamento Seguro de Trajeto**
   - Funcionalidade para informar à rede de apoio sobre um trajeto que está sendo realizado.
   - Modais específicos para inserir dados de **Carros de Aplicativos** (nome do motorista, placa, modelo) e **Viagens de Ônibus** (número da linha, prefixo).

3. **Mapa de Rede e Segurança**
   - Visualização de um mapa que, futuramente, mostrará a localização de outras usuárias emitindo alertas, criando uma rede de vigilância comunitária.
   - Legenda clara para identificar os diferentes tipos de alertas no mapa.

4. **Gestão de Perfil e Contatos de Emergência**
   - Tela de perfil completa para gerenciamento de dados do usuário.
   - Cadastro de contatos de emergência que serão notificados ao acionar um alerta.

5. **Atalhos de Emergência Customizáveis**
   - Configuração de atalhos físicos no celular (como apertar o botão de energia ou volume várias vezes) para ativar um alerta de forma discreta e rápida.

## Tech Stack ⚙️

### Frontend
- ![React Native](https://img.shields.io/badge/React%20Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
- ![Expo](https://img.shields.io/badge/Expo-1C1E24?style=for-the-badge&logo=expo&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

#### Bibliotecas e APIs do Frontend
- **@react-navigation/native** e **@react-navigation/bottom-tabs**: para a navegação por abas (Início, Mapa, Perfil).
- **react-native-maps**: para a renderização do mapa interativo.
- **expo-linear-gradient**: para criar os gradientes visuais na interface.

## Equipe 🏆

**Gabriella Graciano de Souza**  
📧 E-mail: [gabifc_graciano@hotmail.com](mailto:gabifc_graciano@hotmail.com)  
🖋️ Behance: [behance.net/gabygraciano](https://www.behance.net/gabygraciano)  
🌐 GitHub: [github.com/gabygraciano](https://github.com/gabygraciano)

**Leonardo Seabra**  
📧 E-mail: [leoseabrasz@gmail.com](mailto:leoseabrasz@gmail.com)  
🖋️ Behance: [behance.net/leoseabra2](https://www.behance.net/leoseabra2)  

**Wictor Mannuel Domingos de Melo**  
📧 E-mail: [wictormannuel@gmail.com](mailto:wictormannuel@gmail.com)  
🌐 GitHub: [github.com/Wictor0](https://github.com/Wictor0)

**Luís Vinicius Lauriano de França**  
📧 E-mail: [luislauriano@outlook.com.br](mailto:luislauriano@outlook.com.br)  
🌐 GitHub: [github.com/luislauriano](https://github.com/luislauriano)

---

## Documentação 📄
- [Pitch](https://docs.google.com/presentation/d/11cKMmKdL0x_1oxNgFkoqDOUsL4tjD13W0P-9OquYtbs/edit?usp=sharing)
- [Vídeo de Demonstração](https://www.youtube.com/watch?v=vivpIc3Jj4s)


## Instalação ⬇️

```bash
- git clone https://github.com/gabygraciano/app-denuncias.git
cd app-denuncias
- npm install
```

## Rodando o projeto 🏃
```bash
- npx expo start
```

```bash
Usuário cadastrado para teste: gabi@hotmail.com
Senha: gabi123
```

### Caso precise da chave de API do Supabase para rodar o banco de dados

```bash
const supabaseUrl = 'https://ezyrcmwtqkzpyalvdziv.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6eXJjbXd0cWt6cHlhbHZkeml2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0Njk5NjgsImV4cCI6MjA2NjA0NTk2OH0.xo8sFUn-KmLBNg8cXf9TSzoHLpxoWPVScd_D5FNnUpE';
```

## Como contribuir 🤝
### Branches
Pull requests devem ser compostos pelo tipo e nome da branch.\
os nomes das branchs devem ser separados por "-".\
os tipo são compostos por:
- feature - Para novas funcionalidades
- fix - Para bugfixes e hotfixes

Exemplo: 
`feature/navbar-mobile`

### Commits
Commits devem ser estruturados da seguinte forma <tipo>(<nome-da-branch>): <descrição do commit>\
Exemplo: 
`feature(navbar-mobile): adicionando navegação`

### Branch padrão
- develop

### Pull requests
Pull requests devem ter uma boa e clara descrição.\
Os 3 principais tópicos da descrição devem ser:
`- What I did`
`- How to test`

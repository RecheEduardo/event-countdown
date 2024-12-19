<h1 align="center">⏰ Event Countdown</h1> 

<p align="justify">Bem-vindo ao <strong>Event Countdown!</strong> Essa é uma aplicação desenvolvida em React que permite aos usuários criar contadores regressivos totalmente personalizados para eventos! Com esta aplicação, você pode configurar o nome do evento, a data, a cor do tema e até mesmo uma imagem de fundo exclusiva.</p> 

---

# 🌟 **Funcionalidades**

### ✨ Crie Seu Evento
- **Título**: Insira um nome para o evento.
  
- **Data**: Escolha a data do evento no formato `DD-MM-YYYY`.
  
- **Imagem de Fundo**: Personalize o fundo com qualquer imagem via `URL`.
  
- **Cor do Tema**: Selecione a cor que será usada nos blocos de tempo do contador.

### ⏳ Contagem Regressiva em Tempo Real
- A aplicação atualiza automaticamente os dias, horas, minutos e segundos restantes até o evento escolhido.
  
- Exibe mensagens claras caso o evento já tenha ocorrido.

---

# 📚 **Estrutura do Projeto**

## **Componentes**

#### **EventMaker**
- Um formulário responsável por coletar as informações do evento.
- Utiliza eventos `onChange` para capturar e atualizar as informações nos `states` principais da aplicação.
- Valida os campos necessários antes do envio.

#### **EventCountdown**
- Renderiza o contador regressivo com base nas configurações do usuário.
- **Cálculos de tempo**: 
  - Converte as datas para milissegundos usando `new Date().getTime()`.
  - Realiza os cálculos de dias, horas, minutos e segundos restantes.
  - Atualiza automaticamente a cada segundo usando `setInterval`.

#### **App.jsx**
- Gerencia o fluxo entre os componentes `EventMaker` e `EventCountdown` usando o estado `count`.
- Mantém os `states` principais que armazenam as escolhas do usuário: `colorTheme`, `eventTitle`, `bgImage`, e `eventDate`.

---

# 🚀 **Tecnologias Utilizadas**

 <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" height="35"/>
 O Framework foi muito importante para se tornar possível a arquitetura SPA (Single Page Application) do site, onde a dinamização e componentização auxiliaram num código moderno e funcional.

##

### Hooks implementados 
  - `useState` para gerenciar estados dinâmicos.
  - `useEffect` para manipulações baseadas no ciclo de vida do componente, como a atualização do contador regressivo.

##

<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" height="35"/> <img src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white" height="35"/>

Estilização implementada com pré processamento personalizado para um design visual limpo e atraente, utilizando conceitos como funções e variáveis dentro da folha de estilos.

---

# 🎯 **Possíveis próximos passos de implementação**
- Adicionar suporte a múltiplos eventos simultâneos.
- Implementar opção de download do contador como imagem.
- Melhorar acessibilidade seguindo as diretrizes do WCAG.

---

# 🙏 **Contribuições**
Contribuições são bem-vindas! 
- Crie uma _issue_ para relatar problemas ou sugerir melhorias.
- Envie _pull requests_ com suas ideias e modificações.

---

## 🌎 **Uma aplicação React de Eduardo Reche Martins! 💙🤍**

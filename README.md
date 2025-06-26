desafio-frontend
Aplicação de previsão do tempo desenvolvida em Next.js + React, utilizando WeatherAPI, React Query, Chakra UI e boas práticas de componentização, testes e responsividade.

🚀 Tecnologias

Next.js

React

React Query (v3)

Chakra UI

Axios

React Icons

Jest + Testing Library

🔥 Funcionalidades

Busca previsão do tempo em tempo real usando WeatherAPI

Seleção dinâmica de cidade

Previsão para vários dias

Troca entre unidades °C / °F

Tema escuro/claro (dark/light)

Responsividade total

Localização automática do usuário

Animações suaves com Framer Motion

Código 100% componentizado e reutilizável

Testes unitários nos principais componentes

📦 Instalação
Clone o repositório:

git clone https://github.com/hugovitor/desafio-frontend.git
cd desafio-frontend

Instale as dependências:

npm install

🏃‍♂️ Execução
Para rodar em modo desenvolvimento:

npm run dev

Acesse http://localhost:3000 no navegador.

🧪 Testes
Para rodar os testes unitários:

npm run test

🔑 Configuração da WeatherAPI
A chave da WeatherAPI já está configurada no hook.

Caso deseje trocar, edite src/hooks/useWeatherApi.ts:

const API_KEY = 'SUA_CHAVE_AQUI'

📁 Estrutura de Pastas
src/
  components/
    CitySelector.tsx
    ForecastList.tsx
    ThemeToggle.tsx
    UnitToggle.tsx
    WeatherCard.tsx
  hooks/
    useWeatherApi.ts
  utils/
    formatDate.ts
  pages/
    _app.tsx
    index.tsx
  tests/
    WeatherCard.test.tsx
jest.setup.ts
jest.config.js

💡 Diferenciais implementados

[x] Componentização e reutilização de componentes

[x] Uso de biblioteca de ícones

[x] Organização de código

[x] Cobertura de testes unitários

[x] Troca de unidades de medida (°C/°F)

[x] Animações com Framer Motion

[x] Responsividade

[x] Tema Dark/Light

[x] Localização automática do usuário

[x] Permite escolher outra cidade

📸 Tela exemplo

![image](https://github.com/user-attachments/assets/6f03248d-5801-4ed8-b989-fee30a3b544a)

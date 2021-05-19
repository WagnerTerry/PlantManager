NLW 5 TRILHA REACT NATIVE

- expo init plantmanager
- expo start // inicia o projeto

- expo install @expo/vector-icons
- expo install expo-font @expo-google-fonts/jost
- expo install expo-app-loading
- yarn add @react-navigation/native
- expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
- yarn add @react-navigation/stack
- yarn add react-native-iphone-x-helper
- yarn add axios
- npm install -g json-server
  rodar o json-server {
  json-server ./src/services/server.json --host 192.168.0.107 --port 3333
  }
- expo install react-native-svg

Criar um arquivo na raiz ( custom.d.ts), para importar imagem com ts

dentro do arquivo custom.d.ts
declare module '\*.png' {
const content: any;
export default content
}

NLW 5 TRILHA REACT NATIVE

- expo init plantmanager
- expo start // inicia o projeto

- expo install @expo/vector-icons
- expo install expo-font @expo-google-fonts/jost
- expo install expo-app-loading
- yarn add @react-navigation/native
- expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
- yarn add @react-navigation/stack

Criar um arquivo na raiz ( custom.d.ts), para importar imagem com ts

dentro do arquivo custom.d.ts
declare module '\*.png' {
const content: any;
export default content
}

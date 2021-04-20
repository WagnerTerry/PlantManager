NLW 5 TRILHA REACT NATIVE

- expo init plantmanager
- expo start // inicia o projeto

Criar um arquivo na raiz ( custom.d.ts), para importar imagem com ts

dentro do arquivo custom.d.ts
declare module '\*.png' {
const content: any;
export default content
}

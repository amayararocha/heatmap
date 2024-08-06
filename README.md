# Mapa de Calor 🗺️🌡️

## Visão Geral

Este projeto é uma aplicação web que permite gerar um mapa de calor dinâmico sobre uma imagem com base em dados JSON fornecidos. Utiliza a biblioteca `heatmap.js` para a criação do mapa de calor e `html2canvas` para capturar e baixar a imagem com o mapa de calor sobreposto.

## Componentes Principais 

### HeatmapComponent

**Descrição**: Componente responsável por renderizar o mapa de calor sobre a imagem fornecida.

**Props**:
- `imageUrl` (string): URL da imagem na qual o mapa de calor será sobreposto.
- `data` (array): Dados de entrada para o mapa de calor, contendo informações sobre os pontos de interesse.
- `objectOfInterest` (string): Tipo de objeto de interesse para filtrar os dados a serem exibidos no mapa de calor.

**Funcionalidades**:
- **Inicialização do Heatmap**: Cria uma instância do heatmap quando o componente é montado.
- **Atualização dos Dados**: Filtra os dados para o objeto de interesse e atualiza o mapa de calor com os pontos e valores correspondentes.
- **Download da Imagem**: Captura a área do mapa de calor e a imagem base usando `html2canvas` e permite o download da imagem resultante.

### MainContent

**Descrição**: Componente principal da aplicação que lida com o upload de arquivos JSON e imagens, bem como a seleção do objeto de interesse.

**Estado**:
- `image` (string): URL da imagem carregada.
- `data` (array): Dados carregados do arquivo JSON.
- `objectOfInterest` (string): Tipo de objeto selecionado pelo usuário.

**Funcionalidades**:
- **Upload de JSON**: Lê e formata o arquivo JSON para extrair os dados necessários para o mapa de calor.
- **Upload de Imagem**: Carrega a imagem a ser usada no mapa de calor.
- **Seleção do Objeto de Interesse**: Permite ao usuário escolher qual objeto será destacado no mapa de calor.
- **Renderização Condicional**: Exibe o `HeatmapComponent` somente quando a imagem e os dados estão disponíveis.

## Passos para Inicialização

1. **Clone o Repositório**:
Se você ainda não tiver o repositório localmente, clone-o usando o seguinte comando:
```bash
git clone https://github.com/amayararocha/heatmap.git
cd heatmap
```
2. **Instalação de Dependências**

Instale as dependências necessárias com o comando:
```bash
npm install
```
3. **Execução da Aplicação**

Inicie o servidor de desenvolvimento com o comando:
```bash
npm start
```
Isso deve iniciar a aplicação e abrir um navegador para você visualizar a interface web.

## Requisitos

- **JSON de Entrada**: O arquivo JSON deve seguir a estrutura esperada, com a propriedade `deepstream-msg` contendo dados no formato `"TRACKING-ID|X-MIN|Y-MIN|X-MAX|Y-MAX|OBJECT|REGION"`.
- **Imagem de Entrada**: Deve ser um arquivo de imagem válido (JPG, PNG, etc.) que será utilizado como base para o mapa de calor.

## Acesso Online

Você pode acessar a aplicação online [aqui](https://heatmap-hazel.vercel.app/).

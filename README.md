## Instruções quanto ao uso do projeto

### Requisitos

[NodeJS](https://nodejs.org/en) instalado na máquina.


### Instalação 

Para baixar o repositório, utilize o comando

```bash
git clone https://github.com/FelipeDinnouti/PAM_Atv1_CalculadoraIMC.git
```

Entre no diretório do repositório

```bash
cd PAM_Atv2_CalculadoraIMC
```

Baixe as dependências

```bash
npm install
npm install -g expo-cli
```

Rodando o expo, aplicativo que permite debugar e buildar para iOS e Android
(ainda no diretório do projeto)

```bash
npx expo start --tunnel
```

Caso ele peça para instalar ngrok, digite "y" e aperte enter.

Escaneie o QR-Code (talvez esteja em cima no terminal) no seu celular usando o aplicativo "Expo Go", e estará rodando!

### Features

Além da base de calcular IMC e o peso ideal, o aplicativo também faz a verificação de validez no input do usuário e tem uma animação sempre que o usuário aperta o botão.

### Link do vídeo explicativo

https://drive.google.com/file/d/1THoFktfMkc8q3J_FrUonS-qpa3nDLK75/view?usp=sharing
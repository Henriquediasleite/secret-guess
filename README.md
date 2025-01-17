# Secret Guess

"Secret Guess" é um jogo interativo onde o jogador tenta adivinhar um número secreto escolhido aleatoriamente pelo sistema. O jogo utiliza reconhecimento de voz para capturar os palpites do usuário, oferecendo uma experiência divertida e desafiadora.

## Funcionalidades

- Geração de um número secreto aleatório entre valores predefinidos.
- Interface responsiva para exibir mensagens e feedback ao jogador.
- Reconhecimento de voz para capturar os palpites do jogador.
- Validação dos palpites com mensagens indicativas (número maior ou menor, valores inválidos).
- Opção de reiniciar o jogo após o acerto.

## Tecnologias Utilizadas

- **HTML5**: Estrutura do conteúdo.
- **CSS**: Estilização básica.
- **JavaScript**: Lógica do jogo, validação e reconhecimento de voz.
- **SpeechRecognition API**: Captura e processamento de comandos de voz.

## Estrutura do Projeto

- `index.html`: Estrutura principal da página.
- `style.css`: Estilização da interface do usuário.
- `scripts/sortearNumero.js`: Lógica para gerar o número secreto e configurar os valores mínimos e máximos.
- `scripts/reconhecimentoDeVoz.js`: Implementação do reconhecimento de voz e exibição dos palpites.
- `scripts/validacao.js`: Validação dos palpites e controle do fluxo do jogo.

## Como Executar o Projeto

1. Faça o download ou clone o repositório.
2. Abra o arquivo `index.html` no navegador de sua preferência.
3. Utilize sua voz para dar palpites no número secreto.
4. Siga as dicas fornecidas até acertar o número.

## Pré-requisitos

- Navegador com suporte à API `SpeechRecognition` (ex.: Google Chrome).

## Regras do Jogo

1. Um número secreto é gerado automaticamente entre os valores mínimo e máximo configurados.
2. O jogador tenta adivinhar o número fornecendo palpites por voz.
3. O sistema valida os palpites e fornece dicas:
   - Se o palpite for maior ou menor que o número secreto.
   - Se o palpite for inválido (não é um número ou está fora dos limites).
4. O jogo termina quando o jogador acerta o número secreto, podendo reiniciar o jogo.

## Exemplo de Uso

1. O sistema informa que o número secreto está entre 1 e 100.
2. O jogador fala "50".
3. O sistema exibe o palpite e indica se o número secreto é maior ou menor.
4. O jogador continua dando palpites até acertar.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.
const perguntas = [
  {
    pergunta: "O que é JavaScript?",
    respostas: [
      "Uma linguagem de marcação",
      "Uma linguagem de programação",
      "Um sistema operacional",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
    respostas: [
      "variable nome = 'exemplo';",
      "var nome = 'exemplo';",
      "let nome = 'exemplo';",
    ],
    correta: 2
  },
  {
    pergunta: "Qual função é utilizada para exibir mensagens no console?",
    respostas: [
      "logMessage()",
      "print()",
      "console.log()",
    ],
    correta: 2
  },
  {
    pergunta: "Como você adiciona um comentário de uma linha em JavaScript?",
    respostas: [
      "// Comentário aqui",
      "/* Comentário aqui */",
      "' Comentário aqui",
    ],
    correta: 0
  },
  {
    pergunta: "O que é um array em JavaScript?",
    respostas: [
      "Um tipo de dado para armazenar textos",
      "Uma estrutura de controle de fluxo",
      "Uma coleção ordenada de elementos",
    ],
    correta: 2
  },
  {
    pergunta: "Qual operador é utilizado para comparar igualdade em valor e tipo?",
    respostas: [
      "==",
      "===",
      "!=",
    ],
    correta: 1
  },
  {
    pergunta: "Como você cria uma função em JavaScript?",
    respostas: [
      "function minhaFuncao() {}",
      "funcao minhaFuncao() {}",
      "def minhaFuncao() {}",
    ],
    correta: 0
  },
  {
    pergunta: "O que é o DOM em JavaScript?",
    respostas: [
      "Um formato de arquivo",
      "Uma biblioteca de terceiros",
      "A representação da estrutura da página na memória do navegador",
    ],
    correta: 2
  },
  {
    pergunta: "Qual método é usado para adicionar um elemento a um array em JavaScript?",
    respostas: [
      "addElement()",
      "push()",
      "append()",
    ],
    correta: 1
  },
  {
    pergunta: "O que é um loop em JavaScript?",
    respostas: [
      "Um tipo de dado",
      "Uma estrutura de controle de repetição",
      "Uma função nativa",
    ],
    correta: 1
  },
];
const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

for(const item of perguntas) {

  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    quizItem.querySelector('dl').appendChild(dt)
  }

  quizItem.querySelector('dl dt').remove()
  quiz.appendChild(quizItem)

}
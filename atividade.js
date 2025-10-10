// Classe Questao: representa uma questão
class Questao {
  constructor(respostaCorreta, peso) {
    this.respostaCorreta = respostaCorreta; 
    this.peso = peso;                         
  }
}

// Classe Prova: armazena questões e calcula notas
class Prova {
  constructor() {
    this.questoes = []; 
  }

  // Adiciona uma questão
  adicionarQuestao(questao) {
    this.questoes.push(questao);
  }

  // Calcula nota de um aluno
  // respostasAluno = array de respostas do aluno (mesma ordem das questões)
  calcularNota(respostasAluno) {
    let pontuacaoTotal = 0;
    let pesoTotal = 0;

    this.questoes.forEach((questao, index) => {
      pesoTotal += questao.peso;
      if (respostasAluno[index] === questao.respostaCorreta) {
        pontuacaoTotal += questao.peso;
      }
    });

    if (pesoTotal === 0) return 0;
  
    return (pontuacaoTotal / pesoTotal) * 10;
  }

  // Retorna os 'quantidade' menores valores de um array de notas
  menoresNotas(notas, quantidade = 1) {
    const ordenadas = [...notas].sort((a, b) => a - b);
    return ordenadas.slice(0, quantidade);
  }

  // Retorna os 'quantidade' maiores valores de um array de notas
  maioresNotas(notas, quantidade = 1) {
    const ordenadas = [...notas].sort((a, b) => b - a);
    return ordenadas.slice(0, quantidade);
  }

  // Retorna notas menores que o limite
  notasAbaixoDe(notas, limite) {
    return notas.filter(n => n < limite);
  }

  // Retorna notas maiores que o limite
  notasAcimaDe(notas, limite) {
    return notas.filter(n => n > limite);
  }
}


// Criando prova
const prova = new Prova();
prova.adicionarQuestao(new Questao('a', 2));
prova.adicionarQuestao(new Questao('b', 2));
prova.adicionarQuestao(new Questao('a', 2));
prova.adicionarQuestao(new Questao('c', 2));
prova.adicionarQuestao(new Questao('d', 2));

// Respostas do aluno
const respostasAluno = ['a', 'b', 'b', 'b', 'b'];

// Calculando nota
const nota = prova.calcularNota(respostasAluno);
console.log("Nota do aluno:", nota); // Deve imprimir 4

// Exemplo de array de notas
const notas = [4.0, 6.0, 8.0, 5.0, 7.0];

console.log("2 menores notas:", prova.menoresNotas(notas, 2));
console.log("2 maiores notas:", prova.maioresNotas(notas, 2));
console.log("Notas < 6:", prova.notasAbaixoDe(notas, 6));
console.log("Notas > 6:", prova.notasAcimaDe(notas, 6));

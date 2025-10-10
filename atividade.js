
class Questao {
  constructor(respostaCorreta, peso) {
    this.respostaCorreta = respostaCorreta; 
    this.peso = peso;                         
  }
}


class Prova {
  constructor() {
    this.questoes = []; 
  }


  adicionarQuestao(questao) {
    this.questoes.push(questao);
  }


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


  menoresNotas(notas, quantidade = 1) {
    const ordenadas = [...notas].sort((a, b) => a - b);
    return ordenadas.slice(0, quantidade);
  }


  maioresNotas(notas, quantidade = 1) {
    const ordenadas = [...notas].sort((a, b) => b - a);
    return ordenadas.slice(0, quantidade);
  }


  notasAbaixoDe(notas, limite) {
    return notas.filter(n => n < limite);
  }


  notasAcimaDe(notas, limite) {
    return notas.filter(n => n > limite);
  }
}



const prova = new Prova();
prova.adicionarQuestao(new Questao('a', 2));
prova.adicionarQuestao(new Questao('b', 2));
prova.adicionarQuestao(new Questao('a', 2));
prova.adicionarQuestao(new Questao('c', 2));
prova.adicionarQuestao(new Questao('d', 2));


const respostasAluno = ['a', 'b', 'b', 'b', 'b'];


const nota = prova.calcularNota(respostasAluno);
console.log("Nota do aluno:", nota); 


const notas = [4.0, 6.0, 8.0, 5.0, 7.0];

console.log("2 menores notas:", prova.menoresNotas(notas, 2));
console.log("2 maiores notas:", prova.maioresNotas(notas, 2));
console.log("Notas < 6:", prova.notasAbaixoDe(notas, 6));
console.log("Notas > 6:", prova.notasAcimaDe(notas, 6));

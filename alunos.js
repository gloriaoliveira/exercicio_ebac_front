const alunos = [
    {nome: 'João', nota: 7},
    {nome: 'Maria', nota: 9},
    {nome: 'Pedro', nota: 6},
    {nome: 'Ana', nota: 8}
]

/* function nomeDaFuncao(parametro) {
    // bloco de código
}
  */

function filtrarAprovados(alunos) {
    return alunos.filter(function(aluno) {
        return aluno.nota >= 6;
    });
}

const aprovados = filtrarAprovados(alunos);

/* 
const novoArray = arrayOriginal.filter(function(item) {
    return condição;
  }); */



console.log(aprovados);
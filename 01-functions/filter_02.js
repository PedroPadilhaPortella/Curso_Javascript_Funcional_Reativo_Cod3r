/**
 * Desenvolvendo minha própria filter function
 */
Array.prototype.myFilter = function (fn) {
  const filteredArray = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      filteredArray.push(this[i]);
    }
  }
  return filteredArray;
};

const estudantes = [
  { nome: "Pedro", nota: 10 },
  { nome: "Gabriel", nota: 8 },
  { nome: "Vinicius", nota: 10 },
  { nome: "Casalli", nota: 9 },
  { nome: "Linda", nota: 5.9 },
  { nome: "Ester", nota: 7 },
  { nome: "Agnes", nota: 5 },
];

const getAprovados = (item) => item.nota >= 6;
const getAlunosNoMural = (item) => item.nota >= 9;
const getNomes = (aluno) => aluno.nome;

console.log("Estudantes Aprovados:", estudantes.myFilter(getAprovados).map(getNomes));
console.log("Estudantes do Mural:", estudantes.myFilter(getAlunosNoMural));

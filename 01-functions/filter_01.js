/**
 * Filter em arrays
 */
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

console.log("Estudantes Aprovados:",estudantes.filter(getAprovados).map(getNomes));
console.log("Estudantes do Mural:", estudantes.filter(getAlunosNoMural));

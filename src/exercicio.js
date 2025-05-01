const alunos = [
    { nome: 'Ana', nota: 8 },
    { nome: 'Bruno', nota: 5 },
    { nome: 'Carlos', nota: 6 },
    { nome: 'Diana', nota: 9 },
    { nome: 'Eduarda', nota: 4 }
];


const filtrarAprovados = (lista) => {
    return lista.filter(aluno => aluno.nota >= 6);
};

const aprovados = filtrarAprovados(alunos);
console.log(aprovados);
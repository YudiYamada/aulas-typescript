let nome: string = "Yudi";
let idade: number = 25;
let ativo: boolean = true;

function somar(a: number, b: number): number {
    return a + b;
}


let cidade = "Bragança"; // TypeScript assume que é uma string
let pontos = 100; // TypeScript infere que é um número
let statusOnline = false; // Inferido como booleano

function multiplicar(valor, fator = 2) {
    return valor * fator; // TypeScript infere que o retorno será um número
}
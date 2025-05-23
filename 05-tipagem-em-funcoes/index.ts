// function soma(numberOne: number, numberTwo: number): number {
//   return numberOne + numberTwo;
// }
// console.log(soma(10, 90));

function saudacao(nome: string, saudacao?: string): string {
  return `${saudacao || "Olá"}, ${nome}`;
}

console.log(saudacao("Yudi!"));

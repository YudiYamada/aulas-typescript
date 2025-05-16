// number: Representa números (inteiros, com decimais, etc.).Exemplo:
let idade: number = 24;

// string: Representa sequências de caracteres.Exemplo:
let nome: string = "Yudi";

// boolean: Possui dois valores possíveis: true ou false, muito útil para validações lógicas.Exemplo:
let ativo: boolean = true;

// null e undefined: Usados para representar a ausência ou falta de valor.Exemplo:
let nada: null = null;
let indefinido: undefined = undefined;

// any: Permite que uma variável aceite qualquer tipo, desativando a checagem estática.
let variavel: any = "texto";
variavel = 10;

// Arrays: Tipados para garantir que os elementos pertencem ao mesmo tipo.]
let numeros: number[] = [1, 2, 3, 4];
// ou alternativamente
let outrosNumeros: Array<number> = [5, 6, 7];

// Tuplas: Arrays de tamanho fixo onde cada posição pode ter um tipo diferente.
let pessoa: [string, number] = ["Yudi", 30];
// Tuple com elemento opcional
let coordenada: [number, number, number?] = [10, 20];

// Tuple com tipo rest
let dados: [string, ...number[]] = ["Pontos", 10, 20, 30];

function dividir(a: number, b: number): [number, number] {
  // Retorna o quociente e o resto da divisão
  const quociente = Math.floor(a / b);
  const resto = a % b;
  return [quociente, resto];
}

const [q, r] = dividir(10, 3);
console.log(`Quociente: ${q}, Resto: ${r}`);
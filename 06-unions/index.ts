let identificador: number | string;
identificador = 101;        // Válido, pois é um número
identificador = "XYZ123";   // Válido, pois é uma string

function formatarIdentificador(id: number | string): string {
  if (typeof id === "number") {
    return `Número: ${id.toFixed(0)}`;
  } else {
    return `Texto: ${id.toUpperCase()}`;
  }
}

console.log(formatarIdentificador(42));        // Saída: "Número: 42"
console.log(formatarIdentificador("abc123"));    // Saída: "Texto: ABC123"
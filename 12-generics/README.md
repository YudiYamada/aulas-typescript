# Generics: deixando o código reutilizável

Generics são um recurso fundamental do TypeScript que permite escrever funções, classes e interfaces reutilizáveis e ao mesmo tempo seguras em termos de tipagem. Ao invés de trabalhar com tipos fixos, os generics possibilitam que o tipo seja determinado no momento da utilização, garantindo flexibilidade e mantendo a segurança de tipo.

---

### **Por que utilizar Generics?**

- **Reusabilidade:**  
  Com generics, você evita a duplicação de código. Uma única função ou classe pode operar com diferentes tipos, tornando seu código mais limpo e modular.

- **Segurança de Tipo:**  
  Ao definir generics, o compilador mantém a verificação de tipos, evitando erros comuns em tempo de execução. Você tem a garantia de que os tipos utilizados estão corretos, mesmo quando o código é reaproveitado para diferentes cenários.

- **Flexibilidade para Construir APIs e Bibliotecas:**  
  Generics permitem que você crie componentes que funcionam com uma variedade de tipos sem perder as vantagens da tipagem estática. Isso é especialmente útil em bibliotecas ou APIs que precisam ser amplamente reutilizáveis.

---

### **Sintaxe Básica e Exemplos**

#### **Função Genérica**

A função abaixo, chamada de *identity*, retorna o valor que recebe, mas preserva seu tipo de forma que o compilador saiba exatamente qual o tipo de retorno:

```typescript
function identity<T>(valor: T): T {
  return valor;
}

let resultadoString = identity<string>("TypeScript");
let resultadoNumber = identity<number>(42);
```

Nesse exemplo, o `<T>` age como um *placeholder* de tipo, que é substituído pelo tipo concreto (`string`, `number`, etc.) quando a função é chamada.

---

#### **Generics com Restrições**

Às vezes, é necessário limitar os tipos que podem ser usados com um generic. Você pode fazer isso utilizando restrições:

```typescript
interface PossuiTamanho {
  length: number;
}

function logLength<T extends PossuiTamanho>(valor: T): T {
  console.log(valor.length);
  return valor;
}

logLength("TypeScript"); // Correto, pois string possui a propriedade length
logLength([1, 2, 3]);     // Correto, pois array tem length
// logLength(10);         // Erro: number não possui a propriedade length
```

Com a restrição `T extends PossuiTamanho`, garantimos que o tipo passado para a função tenha uma propriedade `length`, permitindo operações seguras.

---

#### **Classes Genéricas**

Generics também podem ser aplicados a classes, tornando-as altamente flexíveis:

```typescript
class Caixa<T> {
  conteudo: T;

  constructor(conteudo: T) {
    this.conteudo = conteudo;
  }

  mostrarConteudo(): T {
    return this.conteudo;
  }
}

const caixaDeString = new Caixa<string>("Olá, Generics!");
console.log(caixaDeString.mostrarConteudo());

const caixaDeNumero = new Caixa<number>(123);
console.log(caixaDeNumero.mostrarConteudo());
```

Nesse exemplo, a classe `Caixa` pode armazenar e retornar qualquer tipo definido no momento de sua criação, mantendo a consistência da tipagem.

---

### **Conclusão**

Os generics em TypeScript possibilitam um equilíbrio perfeito entre flexibilidade e segurança. Eles permitem a criação de componentes altamente reutilizáveis, que podem operar com vários tipos sem perder a verificação de tipo, resultando em um código mais robusto e fácil de manter. Ao dominar os generics, você estará preparado para construir aplicações escaláveis e bibliotecas que atendam a múltiplos cenários de uso.

---

🛠️ **Autor:** Yudi
📅 **Última atualização:** Maio de 2025
# Interfaces: mais uma forma de nomear tipos de objetos

As **interfaces** em TypeScript são uma maneira poderosa de nomear e definir a estrutura de objetos, promovendo uma forma clara e organizada de se trabalhar com tipos. Ao utilizar interfaces, você define contratos que especificam quais propriedades e métodos um objeto deve ter, o que melhora a legibilidade, a manutenção e a segurança do código.

---

### **Principais Características das Interfaces**

- **Definição de Estrutura:**  
  Interfaces permitem que você descreva exatamente como um objeto deve ser estruturado, definindo propriedades e seus respectivos tipos, além de métodos. Isso serve como uma espécie de "contrato" que os objetos devem seguir.

- **Propriedades Opcionais e Readonly:**  
  É possível marcar propriedades como opcionais usando o símbolo `?` e indicar propriedades somente leitura com `readonly`, garantindo que certas partes do objeto não sejam modificadas após a definição.

- **Extensibilidade e Reutilização:**  
  Interfaces podem ser extendidas por outras interfaces, permitindo a criação de estruturas hierarquizadas e a reutilização de definições já existentes. Além disso, elas podem ser implementadas por classes, assegurando que essas classes mantenham os contratos definidos.

---

### **Exemplo de Interface**

A seguir, um exemplo básico de uma interface que define um objeto do tipo `Usuario`:

```typescript
interface Usuario {
  id: number;
  nome: string;
  email?: string; // Propriedade opcional
}

const usuario: Usuario = {
  id: 1,
  nome: "Yudi"
  // email não foi definido, pois é opcional
};
```

Neste exemplo, a interface `Usuario` garante que qualquer objeto desse tipo possua as propriedades `id` (número) e `nome` (string), e pode ou não incluir a propriedade `email` (string).

---

### **Extendendo Interfaces**

Você pode criar novas interfaces a partir de interfaces já existentes. Essa técnica é útil para especializar tipos sem repetir definições:

```typescript
interface Admin extends Usuario {
  permissao: boolean;
}

const admin: Admin = {
  id: 2,
  nome: "Yudi",
  permissao: true
};
```

Aqui, `Admin` estende `Usuario` e adiciona a propriedade `permissao`, assegurando que um objeto do tipo `Admin` tenha todas as propriedades de um `Usuario`, mais as adicionais.

---

### **Interfaces em Classes**

Interfaces podem também ser implementadas por classes, garantindo que a classe adote a estrutura e os métodos definidos pela interface:

```typescript
interface Veiculo {
  marca: string;
  acelerar(): void;
}

class Carro implements Veiculo {
  marca: string;
  
  constructor(marca: string) {
    this.marca = marca;
  }
  
  acelerar(): void {
    console.log(`${this.marca} está acelerando!`);
  }
}

const meuCarro = new Carro("Toyota");
meuCarro.acelerar();
```

Neste exemplo, a classe `Carro` implementa a interface `Veiculo`, obrigando a definir tanto a propriedade `marca` quanto o método `acelerar`.

---

### **Conclusão**

As interfaces em TypeScript oferecem uma forma elegante e robusta de definir tipos de objetos. Ao estabelecer contratos claros, elas ajudam a evitar erros, facilitam a leitura do código e promovem uma arquitetura mais organizada e escalável. Se você busca construir aplicações com alta previsibilidade e manutenibilidade, utilizar interfaces é uma prática essencial.

---

🛠️ **Autor:** Yudi
📅 **Última atualização:** Maio de 2025
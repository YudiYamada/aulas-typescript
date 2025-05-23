# Tipagem de objetos

A tipagem de objetos em TypeScript é essencial para definir e validar a estrutura dos dados que usamos em nossas aplicações. Ela garante que um objeto possua um conjunto específico de propriedades e métodos, proporcionando mais segurança e clareza no código. Vamos desmembrar os pontos principais:

---

### **Definição Explícita de Estrutura**

Em TypeScript, podemos declarar explicitamente como um objeto deve ser estruturado. Isso é feito utilizando a sintaxe de tipos para objetos, onde especificamos as propriedades e os respectivos tipos:

```typescript
let usuario: { id: number; nome: string; ativo: boolean } = {
  id: 1,
  nome: "Yudi",
  ativo: true
};
```

Neste exemplo, o objeto `usuario` deverá obrigatoriamente conter as propriedades `id` (número), `nome` (string) e `ativo` (boolean).

---

### **Interfaces e Type Aliases**

Dois mecanismos comuns para tipar objetos são as **interfaces** e os **type aliases**:

- **Interfaces:**  
  Permitem definir contratos para objetos e podem ser estendidas ou implementadas em classes. São ideais para descrever a estrutura de dados de forma reutilizável e modular.

  ```typescript
  interface Usuario {
    id: number;
    nome: string;
    ativo: boolean;
  }

  const usuario: Usuario = {
    id: 2,
    nome: "Yudi",
    ativo: true
  };
  ```

- **Type Aliases:**  
  Também permitem definir a estrutura de um objeto, mas são mais flexíveis, podendo representar uniões, interseções e tipos primitivos. Diferente das interfaces, não podem ser reabertos para extensão.

  ```typescript
  type Usuario = {
    id: number;
    nome: string;
    ativo: boolean;
  };

  const usuario: Usuario = {
    id: 3,
    nome: "Yudi",
    ativo: true
  };
  ```

---

### **Propriedades Opcionais e Read-Only**

- **Propriedades Opcionais:**  
  Utiliza-se o símbolo `?` para indicar que uma propriedade pode não estar presente no objeto.

  ```typescript
  interface Usuario {
    id: number;
    nome: string;
    ativo?: boolean; // propriedade opcional
  }
  ```

- **Propriedades Somente Leitura:**  
  Usando a palavra-chave `readonly`, garantimos que certa propriedade não seja alterada após sua definição.

  ```typescript
  interface Usuario {
    readonly id: number;
    nome: string;
  }

  const usuario: Usuario = { id: 4, nome: "Yudi" };
  // usuario.id = 5; // Isso causará erro, pois 'id' é read-only.
  ```

---

### **Vantagens da Tipagem de Objetos**

- **Segurança:**  
  Ao especificar os tipos esperados para cada propriedade, o TypeScript previne erros comuns que podem ocorrer em tempo de execução, como acessar uma propriedade inexistente ou manipulá-la indevidamente.

- **Clareza:**  
  A definição explícita da estrutura dos objetos serve também como documentação, facilitando a manutenção do código e a colaboração entre desenvolvedores.

- **Inferência e Autocompletar:**  
  Com as definições de tipos, editores modernos conseguem oferecer autocompletar contextual, melhorando a produtividade e reduzindo a chance de erros.

---

### **Conclusão**

A tipagem de objetos em TypeScript é uma prática fundamental que melhora a robustez do código, facilitando o desenvolvimento e a escalabilidade de aplicações. Ela permite que os desenvolvedores definam e validem a estrutura dos dados de forma clara, utilizando recursos como interfaces, type aliases, propriedades opcionais e read-only. Esse controle extra sobre os tipos de dados resulta em um código mais seguro, autoexplicativo e fácil de manter.
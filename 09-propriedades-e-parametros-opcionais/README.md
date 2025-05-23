# Propriedades e parâmetros opcionais

Em TypeScript, propriedades e parâmetros opcionais oferecem flexibilidade e clareza ao indicar que certos valores podem não estar presentes. Esse recurso é essencial tanto na definição de objetos quanto na assinatura de funções, permitindo que o código trate cenários onde alguns dados são realmente opcionais.

---

### **Propriedades Opcionais em Objetos**

- **Definição:**  
  Ao definir um objeto ou interface, você pode marcar uma propriedade como opcional usando o símbolo `?`. Isso significa que o objeto pode ou não ter essa propriedade, sem que o compilador gere um erro.

- **Exemplo:**

  ```typescript
  interface Usuario {
    id: number;
    nome: string;
    // A propriedade 'email' é opcional.
    email?: string;
  }

  const usuario1: Usuario = {
    id: 1,
    nome: "Yudi"
    // email não foi definido, mas isso é permitido.
  };

  const usuario2: Usuario = {
    id: 2,
    nome: "Ana",
    email: "ana@example.com"
  };
  ```

  *Neste exemplo, a propriedade `email` pode estar ausente em um objeto do tipo `Usuario`.*

---

### **Parâmetros Opcionais em Funções**

- **Definição:**  
  Em funções, parâmetros opcionais são declarados com o `?` logo após o nome do parâmetro. Esses parâmetros podem ser omitidos na chamada da função.

- **Observação:**  
  Parâmetros opcionais sempre devem ser declarados após os parâmetros obrigatórios, já que parâmetros ausentes são interpretados como `undefined`.

- **Exemplo:**

  ```typescript
  function saudacao(nome: string, saudacao?: string): string {
    // Se 'saudacao' não for fornecido, utiliza um valor padrão.
    return `${saudacao || "Olá"}, ${nome}!`;
  }

  console.log(saudacao("Yudi"));             // Saída: "Olá, Yudi!"
  console.log(saudacao("Ana", "Bem-vinda"));   // Saída: "Bem-vinda, Ana!"
  ```

  *Nesse exemplo, o parâmetro `saudacao` é opcional, permitindo que a função seja chamada sem fornecer seu valor, o que resultará na utilização de um valor padrão.*

---

### **Vantagens**

- **Flexibilidade:**  
  Permite definir estruturas e funções que se adaptam a diferentes cenários sem a obrigatoriedade de fornecer todos os valores.

- **Legibilidade:**  
  Deixa claro, na própria assinatura do tipo ou da função, quais valores são realmente esperados e quais podem ser omitidos.

- **Segurança em Tempo de Compilação:**  
  Mesmo com a flexibilidade, o TypeScript continua a garantir que os acessos e manipulações dos dados sejam seguros, detectando possíveis problemas caso alguma propriedade esperada não seja verificada.

---

### **Conclusão**

Propriedades e parâmetros opcionais em TypeScript ajudam a escrever código mais dinâmico e limpo, permitindo que você defina com precisão quais dados são essenciais e quais podem ser omitidos. Essa abordagem é particularmente útil em aplicações complexas onde nem todas as informações estão disponíveis ou são necessárias em todos os momentos.

---

🛠️ **Autor:** Yudi
📅 **Última atualização:** Maio de 2025
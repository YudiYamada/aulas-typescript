# Unions: unindo um ou mais tipos

Unions em TypeScript permitem que uma variável, parâmetro de função ou retorno de função seja definido para assumir **um ou mais tipos**. Em outras palavras, você pode criar uma definição de tipo que aceita, por exemplo, tanto um número quanto uma string, usando o operador pipe (`|`).

---

### **Como Funcionam os Unions?**

- **Declaração:**  
  Ao declarar um union, você une dois ou mais tipos. Por exemplo:

  ```typescript
  let identificador: number | string;
  identificador = 101;        // Válido, pois é um número
  identificador = "XYZ123";   // Válido, pois é uma string
  ```

- **Checagem de Tipo (Type Narrowing):**  
  Quando você precisa executar operações específicas de cada tipo, utiliza verificações em tempo de execução com `typeof`, `instanceof` ou outra lógica para garantir que o valor está no formato esperado:

  ```typescript
  function formatarIdentificador(id: number | string): string {
    if (typeof id === "number") {
      return `Número: ${id.toFixed(0)}`;
    } else {
      return `Texto: ${id.toUpperCase()}`;
    }
  }
  
  console.log(formatarIdentificador(42));        // Saída: "Número: 42"
  console.log(formatarIdentificador("abc123"));    // Saída: "Texto: ABC123"
  ```

---

### **Benefícios dos Unions**

1. **Flexibilidade:**  
   Permite que valores dinâmicos, que podem variar entre diferentes tipos, sejam manuseados sem perder a segurança da tipagem.

2. **Segurança:**  
   O TypeScript garante que operações sejam realizadas de forma segura. Por exemplo, ao aplicar métodos específicos, você pode realizar verificações para ter certeza de que o valor possui o método chamado.

3. **Clareza e Documentação:**  
   Ao especificar que uma variável pode ser de múltiplos tipos, o código se torna mais autodescritivo e fácil de manter, já que outros desenvolvedores sabem quais tipos esperar.

---

### **Considerações Finais**

Os unions são especialmente úteis quando se lida com dados provenientes de fontes diversas (APIs, formulários, etc.) ou quando diferentes valores válidos precisam ser tratados pela mesma função ou variável. Ao usá-los, não se esqueça de implementar checagens de tipo para evitar erros de execução, garantindo que cada valor seja manipulado de forma segura e apropriada.

---

🛠️ **Autor:** Yudi
📅 **Última atualização:** Maio de 2025
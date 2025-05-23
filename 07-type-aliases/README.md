# Type aliases: dando apelidos aos nossos tipos

**Type Aliases** são uma ferramenta poderosa do TypeScript que permite dar "apelidos" a tipos, possibilitando que você reutilize definições complexas de forma mais clara e concisa. Em vez de repetir uma estrutura de tipo em diversos pontos do código, você pode definir um nome para ela e utilizá-lo em qualquer lugar.

---

### **O que são Type Aliases?**

Um *type alias* cria um novo nome para um tipo que pode ser um tipo primitivo, uma união, uma interseção ou até mesmo uma estrutura de objeto definida. Eles não geram um novo tipo em tempo de execução; somente facilitam a leitura e a manutenção do código durante o desenvolvimento.

---

### **Sintaxe e Exemplos**

Para criar um type alias, utiliza-se a palavra-chave `type`, seguida pelo nome do alias e, em seguida, a definição do tipo. Veja alguns exemplos:

- **Atribuindo um nome a uma união de tipos:**

  ```typescript
  type ID = number | string;
  
  let userId: ID = 101;
  userId = "ABC123"; // ambos são válidos
  ```

  Nesse exemplo, `ID` pode ser tanto um `number` quanto uma `string`, tornando o código mais semântico.

- **Definindo um alias para um objeto:**

  ```typescript
  type User = {
    id: ID;
    name: string;
    active: boolean;
  };
  
  const user: User = {
    id: 42,
    name: "Yudi",
    active: true
  };
  ```

  Aqui, o type alias `User` facilita a declaração de objetos com a estrutura esperada, promovendo uma documentação embutida do que se espera desse tipo.

- **Utilizando Type Alias com tipos complexos**  
  Você pode combinar diversos tipos ou até usar outras estruturas, como arrays e funções:

  ```typescript
  type Point = {
    x: number;
    y: number;
  };
  
  type Shape = Point | { radius: number };

  function draw(shape: Shape): void {
    if ("radius" in shape) {
      console.log(`Desenhando um círculo com raio ${shape.radius}`);
    } else {
      console.log(`Desenhando um ponto em (${shape.x}, ${shape.y})`);
    }
  }
  ```

  Nesse exemplo, `Shape` pode ser tanto um ponto (utilizando o alias `Point`) quanto um objeto que representa um círculo. Isso demonstra como os *type aliases* permitem criar tipos flexíveis para diferentes cenários.

---

### **Por Que Usar Type Aliases?**

- **Clareza e Legibilidade:** Ao nomear tipos complexos, o código fica mais intuitivo e fácil de entender.
- **Manutenção:** Facilita a alteração e a evolução dos tipos, já que você só precisa atualizar o alias em um único local, sem impacto em todas as declarações.
- **Reutilização:** Permite usar um mesmo conjunto de definições em diferentes partes do seu código, promovendo a reutilização e evitando duplicação.

---

### **Conclusão**

Os *type aliases* são uma excelente forma de tornar o código TypeScript mais legível e organizado. Ao dar apelidos aos tipos, você cria um código mais autoexplicativo e fácil de manter, especialmente em projetos de grande escala onde a estrutura dos dados pode ser bastante complexa.

---

🛠️ **Autor:** Yudi
📅 **Última atualização:** Maio de 2025
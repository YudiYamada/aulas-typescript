No TypeScript, a organização do código em módulos é essencial para a escalabilidade e manutenibilidade de aplicações. Por meio dos comandos **export** e **import**, podemos dividir nosso código em arquivos menores, promovendo a reutilização de funcionalidades e o encapsulamento dos detalhes de implementação.

---

### **Export de Módulos**

- **Export Nomeado (Named Export):**  
  Permite exportar múltiplos itens de um módulo de forma explícita. Cada função, variável ou classe exportada pode ser importada individualmente usando os mesmos nomes definidos.
  
  **Exemplo:**
  
  ```typescript
  // math.ts
  export function add(a: number, b: number): number {
      return a + b;
  }

  export const PI = 3.14;
  ```
  
  Nesse caso, ambos `add` e `PI` estão disponíveis para importação em outros módulos.

- **Export Padrão (Default Export):**  
  Permite exportar um único item como "exportação principal" do módulo. Ao importar um default, não é necessário usar chaves, e podemos atribuir qualquer nome ao valor importado.
  
  **Exemplo:**
  
  ```typescript
  // multiply.ts
  export default function multiply(a: number, b: number): number {
      return a * b;
  }
  ```

---

### **Import de Módulos**

- **Importando Export Nomeado:**  
  Para importar itens exportados de forma nomeada, usamos as chaves e os nomes exatos dos elementos exportados.
  
  **Exemplo:**
  
  ```typescript
  // app.ts
  import { add, PI } from './math';

  console.log(add(10, PI));
  ```

- **Importando Export Padrão:**  
  Ao importar uma exportação padrão, não usamos chaves e podemos escolher o nome que fizer sentido no contexto.
  
  **Exemplo:**
  
  ```typescript
  // app.ts
  import multiply from './multiply';

  console.log(multiply(5, 2));
  ```

- **Combinação de Importações:**  
  É possível combinar importações nomeadas e a default em um mesmo arquivo.
  
  **Exemplo:**
  
  ```typescript
  // utils.ts
  export default function subtract(a: number, b: number): number {
      return a - b;
  }

  export const version = "1.0.0";
  ```

  ```typescript
  // app.ts
  import subtract, { version } from './utils';

  console.log(`Versão: ${version}, Resultado da subtração: ${subtract(10, 5)}`);
  ```

---

### **Benefícios e Considerações**

- **Encapsulamento:**  
  Dividir o código em módulos permite que cada arquivo tenha responsabilidades bem definidas, facilitando a manutenção e a reutilização.

- **Isolamento:**  
  Ao utilizar export e import, você controla quais partes do código são públicas e quais permanecem privadas ao módulo.

- **Resolução e Configuração:**  
  O TypeScript se integra a diferentes sistemas de módulos (como CommonJS e ES Modules). A configuração do `tsconfig.json` (por exemplo, através da propriedade `module`) define como os módulos serão resolvidos e gerados na transpilação para JavaScript.

- **Boas Práticas:**  
  Utilize **export nomeado** quando houver múltiplos itens a serem exportados e **export default** para indicar o elemento "principal" do módulo. Essa escolha contribui para a clareza e organização do código.

---

Em resumo, os comandos **export** e **import** no TypeScript são ferramentas fundamentais para a modularização do código. Eles possibilitam que funcionalidades sejam agrupadas, reutilizadas e mantidas de maneira isolada, promovendo um desenvolvimento mais organizado, sustentável e escalável.

---

🛠️ **Autor:** Yudi
📅 **Última atualização:** Maio de 2025
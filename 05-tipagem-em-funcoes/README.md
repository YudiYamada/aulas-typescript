# Tipagem em Funções

A tipagem em funções do TypeScript é fundamental para garantir que o código seja mais seguro, previsível e fácil de manter. Ela permite definir exatamente quais tipos os parâmetros devem ter e qual o tipo do valor retornado, evitando erros comuns que podem ocorrer em tempo de execução. Vamos explorar os aspectos principais:

---

### 1. Tipos de Parâmetros e de Retorno

Em TypeScript, você pode declarar explicitamente o tipo de cada parâmetro e também o tipo do valor que uma função retorna. Isso é feito através da sintaxe de anotações, usando `: type` tanto após os parâmetros quanto após os parênteses da função. Por exemplo:

```typescript
function soma(a: number, b: number): number {
  return a + b;
}
```

Nesse exemplo, a função `soma` espera receber dois números e garantidamente retornará um número. Se tentar passar outro tipo para um dos parâmetros, o compilador sinalizará o erro antes mesmo do código ser executado.

---

### 2. Parâmetros Opcionais e Valores Padrão

Nem todos os parâmetros precisam ser obrigatórios. Para indicar que um parâmetro é opcional, utiliza-se o símbolo `?`. Isso significa que, ao chamar a função, esse argumento pode ser omitido:

```typescript
function saudacao(nome: string, saudacao?: string): string {
  return `${saudacao || "Olá"}, ${nome}!`;
}
```

Além disso, você pode fornecer valores padrão aos parâmetros, garantindo que, mesmo sem uma definição explícita na chamada, haja um valor seguro a ser utilizado:

```typescript
function saudacao(nome: string, saudacao: string = "Olá"): string {
  return `${saudacao}, ${nome}!`;
}
```

---

### 3. Inferência de Tipos

Embora a declaração explícita dos tipos torne o código mais claro, o TypeScript muitas vezes consegue inferir os tipos com base no contexto. Essa inferência é útil em funções anônimas ou callbacks, onde nem sempre é necessário declarar cada tipo, mas a clareza e segurança aumentam quando fazemos as anotações:

```typescript
const numeros: number[] = [1, 2, 3];
const dobrados = numeros.map((numero: number) => numero * 2);
```

---

### 4. Funções Genéricas

Funções genéricas são extremamente úteis para criar funções flexíveis que operam com diversos tipos, mantendo a checagem de tipos segura. Utilizando *generics*, definimos placeholders para os tipos que serão especificados no momento da chamada:

```typescript
function identidade<T>(valor: T): T {
  return valor;
}

// Exemplo de uso:
let resultado = identidade<string>("TypeScript");
```

Isso permite que a função `identidade` seja utilizada com qualquer tipo, sem perder a garantia do tipo durante a compilação.

---

### 5. Sobrecarga de Função

TypeScript permite definir múltiplas assinaturas para uma única função, ou seja, diferentes formas de chamar uma mesma função, conhecidas como sobrecarga. Cada assinatura define como a função pode ser chamada, enquanto a implementação única abrange todas as variações:

```typescript
// Definindo as assinaturas:
function criarData(timestamp: number): Date;
function criarData(dataString: string): Date;

// Implementação da função:
function criarData(data: number | string): Date {
  return new Date(data);
}
```

Com sobrecarga, o desenvolvedor informa ao compilador as diferentes formas de invocar a função, facilitando o uso correto e a integração com editores que possuem *intellisense*.

---

### Conclusão

A tipagem em funções do TypeScript não apenas previne erros comuns, como também melhora a legibilidade e manutenção do código. Ao definir explicitamente os tipos dos parâmetros, o tipo de retorno e utilizando recursos como parâmetros opcionais, valores padrão, generics e sobrecarga de funções, os desenvolvedores contam com ferramentas que ajudam a construir aplicativos mais robustos e confiáveis.

Essa abordagem tipada é especialmente valiosa em projetos de grande escala, onde a clareza e consistência do código são essenciais para o desenvolvimento colaborativo e a evolução do software.

---

🛠️ **Autor:** Yudi
📅 **Última atualização:** Maio de 2025
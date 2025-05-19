# Tipagem Explícita e Inferência de Tipo no TypeScript

Este documento apresenta um resumo claro e objetivo sobre os dois principais mecanismos de definição de tipos no TypeScript: **tipagem explícita** e **inferência de tipo**. Entender essas abordagens é essencial para escrever código mais seguro, legível e eficiente.

---

## 📌 O que é Tipagem no TypeScript?

O TypeScript é uma linguagem que adiciona tipagem estática ao JavaScript. Com ele, é possível definir os tipos de variáveis, parâmetros e retornos de função, o que ajuda a detectar erros em tempo de desenvolvimento.

---

## 1. Tipagem Explícita

Na **tipagem explícita**, o desenvolvedor declara manualmente o tipo de uma variável, parâmetro ou retorno de função.

### Exemplo:

```ts
let nome: string = "Yudi";
let idade: number = 25;
let ativo: boolean = true;

function somar(a: number, b: number): number {
    return a + b;
}
````

✅ Vantagens:

* Mais clareza e legibilidade.
* Redução de erros.
* Útil em código complexo e times maiores.

---

## 2. Inferência de Tipo

Na **inferência de tipo**, o TypeScript deduz automaticamente o tipo com base no valor atribuído.

### Exemplo:

```ts
let cidade = "Bragança"; // inferido como string
let pontos = 100; // inferido como number
let statusOnline = false; // inferido como boolean

function multiplicar(valor, fator = 2) {
    return valor * fator; // retorno inferido como number
}
```

✅ Vantagens:

* Código mais conciso.
* Menos repetição.
* Mais ágil para prototipação.

---

## 🎯 Quando Usar Cada Um?

* **Tipagem Explícita**: ideal para funções públicas, APIs, ou partes críticas da aplicação.
* **Inferência de Tipo**: útil para declarações simples e variáveis locais.

> O equilíbrio entre clareza e concisão é a chave para um código sustentável.

---

## 📚 Conclusão

O TypeScript oferece uma tipagem poderosa e flexível. Saber quando usar tipagem explícita ou confiar na inferência pode aumentar a produtividade e a qualidade do seu código.

> Use o melhor dos dois mundos: segurança com clareza, sem abrir mão da agilidade.

---

🛠️ **Autor:** Yudi
📅 **Última atualização:** Maio de 2025
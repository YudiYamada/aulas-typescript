# **Enums**

Enums no TypeScript são uma forma poderosa de definir um conjunto de constantes nomeadas de maneira legível e organizada. Em tempo de compilação, eles oferecem segurança de tipos, enquanto em tempo de execução são representados como objetos JavaScript, permitindo, por exemplo, a iteração sobre suas chaves e valores. Essa dualidade facilita a documentação da intenção do código, ajudando a prevenir erros comuns relacionados a valores literais espalhados pelo projeto.

**Tipos de Enums**

1. **Enums Númericos**
    
    Por padrão, o TypeScript atribui valores numéricos aos membros de um enum, iniciando em zero, a menos que seja explicitamente inicializado com outro valor. Além disso, é possível definir manualmente o valor inicial e deixar que os demais sejam auto-incrementados. 
    
    Por exemplo:
    
    ```tsx
    enum Direcao {
    Cima = 1,
    Baixo,    // 2
    Esquerda, // 3
    Direita   // 4
    }
    ```
    
2. **Enums de Strings**
    
    Diferente dos numéricos, em enums de strings cada membro precisa ser inicializado com um literal de string, evitando a funcionalidade de auto-incremento. Essa abordagem garante que os valores sejam mais legíveis e de fácil interpretação em tempo de execução, embora não permita o mapeamento reverso. 
    
    Por exemplo:
    
    ```tsx
    enum Status {
    Sucesso = "SUCESSO",
    Erro = "ERRO"
    }
    ```
    
3. **Enums Heterogêneos**
    
    É tecnicamente possível combinar valores numéricos e de strings em um mesmo enum, mas essa mistura não é geralmente recomendada, pois pode tornar o código confuso e dificultar a manutenção. Por isso, na maioria das situações, optar por apenas um tipo – numérico ou string – é o melhor caminho.
    
    Por exemplo:
    
    ```tsx
    enum Misturado {
    Sim = "SIM",
    Nao = 0
    }
    ```
    

Em resumo, os enums no TypeScript oferecem uma maneira estruturada e segura de lidar com conjuntos de constantes, contribuindo tanto para a legibilidade quanto para a manutenção do código. No entanto, é importante avaliar seu impacto em tempo de execução e explorar alternativas quando apropriado.

---

🛠️ **Autor:** Yudi
📅 **Última atualização:** Maio de 2025
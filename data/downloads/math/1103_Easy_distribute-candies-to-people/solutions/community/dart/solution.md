# solução dart- simples, em português

**Author:** lavfreits
**Votes:** 0
**Link:** [https://leetcode.com/problems/distribute-candies-to-people/solutions/5563707/](https://leetcode.com/problems/distribute-candies-to-people/solutions/5563707/)

---

# Intuition
A ideia inicial \xE9 distribuir os doces de forma c\xEDclica entre as pessoas, incrementando a quantidade de doces dados a cada pessoa em cada rodada, at\xE9 que todos os doces sejam distribu\xEDdos. Come\xE7amos dando 1 doce para a primeira pessoa, 2 doces para a segunda pessoa, e assim por diante, e reiniciamos o ciclo quando chegarmos ao final da fila de pessoas.

# Approach
1. Inicializamos uma lista answer com o tamanho num_people e todos os elementos iguais a zero.
2. Utilizamos um loop while que continua enquanto houver doces para distribuir.
3. A cada itera\xE7\xE3o, calculamos a pessoa atual (currentPerson) que deve receber os doces usando o operador m\xF3dulo (%).
4. Se os doces restantes forem menores do que a quantidade de doces a serem dados (candyToGive), adicionamos todos os doces restantes para a pessoa atual e encerramos o loop.
5. Caso contr\xE1rio, adicionamos candyToGive doces para a pessoa atual, subtra\xEDmos essa quantidade dos doces restantes, incrementamos candyToGive para a pr\xF3xima itera\xE7\xE3o, e passamos para a pr\xF3xima pessoa.
6. Retornamos a lista answer que representa a distribui\xE7\xE3o final dos doces.

# Complexity

**Time complexity:**
- A complexidade de tempo \xE9 $$O(\\sqrt{2C})$$, onde $$C$$ \xE9 o n\xFAmero de doces. Isso ocorre porque a soma dos primeiros $$k$$ n\xFAmeros naturais \xE9 da ordem de $$k^2$$. Ent\xE3o, aproximadamente, precisamos de $$k \\approx \\sqrt{2C}$$ itera\xE7\xF5es para distribuir todos os doces.

**Space complexity:**
- A complexidade de espa\xE7o \xE9 $$O(n)$$, onde $$n$$ \xE9 o n\xFAmero de pessoas, pois precisamos armazenar a distribui\xE7\xE3o dos doces em uma lista de tamanho $$n$$.

# Code
```
class Solution {
  List<int> distributeCandies(int candies, int num_people) {
    List<int> answer = List.filled(num_people, 0); 

    int person = 0; 
    int candyToGive = 1; 

    while (candies > 0) {
      int currentPerson = person % num_people; 

      if (candies < candyToGive) {
        answer[currentPerson] += candies; 
        break;
      }

      answer[currentPerson] += candyToGive; 
      candies -= candyToGive;

      candyToGive++; 
      person++;
    }

    return answer; 
  }
}

```
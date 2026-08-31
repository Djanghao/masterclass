# solução em kotlin - runtime beats 100%

**Author:** lavfreits
**Votes:** 0
**Link:** [https://leetcode.com/problems/search-in-rotated-sorted-array-ii/solutions/5932951/](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/solutions/5932951/)

---

# Intuition
N\xE3o d\xE1 pra ordenar se n\xE3o torna O(n), ent\xE3o vamos fazer a busca bbin\xE1rio desornenado mesmo, analisando as partes ornenadas.

# Approach
1. Fazemos a configura\xE7\xE3o da busca bin\xE1ria, definindo o while e calculando o meio
2. Se nums[mid] for igual a target retornamos true
3. Se os numeros de mid, felt e right forem iguais, n\xE3o temos como definir se est\xE1 ordenado ou n\xE3o, ent\xE3o diminuimos o length da busca: left++ e right--
4. Se nums[left] for menor ou igual a nums[mid], significa que o lado esquerdo est\xE1 ordenado:
    - Se o target estiver entre nums[left] e nums[mid], ajustamos right para mid - 1 para reduzir o tamanho do array de busca.
    - Caso contr\xE1rio, ajustamos left para mid + 1.
5. Se nums[left] n\xE3o for menor que nums[mid], significa que o lado direito est\xE1 ordenado:
    - Se o target estiver entre nums[mid] e nums[right], ajustamos left para mid + 1.
    - Caso contr\xE1rio, ajustamos right para mid - 1.
6. Se sairmos do la\xE7o while sem encontrar o target, retornamos false.

# Complexity
- Time complexity:
 $$O(log $$ $$n)$$

- Space complexity:
$$O(1)$$ para algumas vari\xE1veis

# Code
```kotlin []
class Solution {
    fun search(nums: IntArray, target: Int): Boolean {
        
        var left = 0;
        var right = nums.size - 1;


        while (left <= right){

            var mid = (left + right) /2;

            if (nums[mid] == target){
                return true;
            } else if (nums[left] == nums[mid] && nums[right] == nums[mid]){ //n\xE3o d\xE1 pra analisar se ta ordenado
                left++
                mid--
            } else if(nums[left] <= nums[mid]){//esse lado ta ordenado

                 if (nums[mid] > target && nums[left] <= target)  {
                      right = mid - 1;
                 }else{
                     left = mid + 1;
                 }
            }else{
                if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
                }else{
                right = mid - 1;
                }
            }
        
        }
    return false;

    }
}
```